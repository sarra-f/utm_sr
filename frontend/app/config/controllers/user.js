const User = require('../models/User');

const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');

const { validateUpdateUser } = require('../util/validator');
const { generateToken } = require('../util/token');
const { SECRET_KEY } = require('../config');

exports.getUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const token = req.body.token;

        const errors = {};

        if (!userId && !token) {
            errors.request = 'Request Parameters are missing';
            return res.json({
                status: 'failure',
                errors: errors,
            });
        }

        //Validate Token
        const validateToken = jwt.verify(token, SECRET_KEY);
        if (!validateToken) {
            errors.token = 'Token Expired, Login again';

            return res.json({
                status: 'failure',
                errors: errors,
            });
        }

        const user = await User.findOne({ _id: userId });

        const data = {
            id: user._id,
            email: user.email,
            username: user.username,
            name: user.name,
            profilePic: user.profilePic,
            avancement: user.avancement,
            experience: user.experience,
            specialite: user.specialite,
            cursus: user.cursus,
          
        };

        if (user) {
            return res.json({
                status: 'success',
                user: data,
                errors: errors,
            });
        }
    } catch (e) {
        return res.json({
            status: 'failure',
            errors: e,
        });
    }
};

// Multer Config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const uploadStorage = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    },
}).single('updateProfilePic');

exports.updateUser = (req, res, next) => {
    try {
        const errors = {};

        uploadStorage(req, res, async function (err) {
            if (err) {
                // file  handle error
                errors.file = err.message;
                return res.json({
                    status: 'failure',
                    errors: errors,
                });
            }

            const id = req.body.id;
            const password = req.body.password;
            const newPassword = req.body.newPassword;
            const email = req.body.email;
            const name = req.body.name;
            const avancement = req.body.avancement;
            const specialite = req.body.specialite;
            const experience = req.body.experience;
            const cursus= req.body.cursus;
          
            const passedToken = req.body.token;

            if (!passedToken) {
                errors.request = 'Authentication Token is missing, Login again';
                return res.json({
                    status: 'failure',
                    errors: errors,
                });
            }

            //Validate Token
            const validateToken = jwt.verify(passedToken, SECRET_KEY);
            if (!validateToken) {
                errors.token = 'Token Expired, Login again';

                return res.json({
                    status: 'failure',
                    errors: errors,
                });
            }

            if (err) {
                //   handle error
                errors.file = err;
                return res.json({
                    status: 'failure',
                    errors: errors,
                });
            }

            if (!id || id.length <= 0) {
                errors.userId = 'User ID missing';
                return res.json({
                    status: 'success',
                    error: errors,
                });
            }

            // Get Existing Image
            const oldData = await User.findOne({ _id: id });

            if (!oldData) {
                return res.json({
                    status: 'success',
                    errors: { userNotFound: 'User not found' },
                });
            }

            let profilePic = oldData.profilePic;

            if (req.file) {
                profilePic = 'uploads/' + req.file.filename;
            }

            const { valid, validationErrors } = validateUpdateUser(name, email);

            if (!valid) {
                return res.json({
                    status: 'success',
                    errors: validationErrors,
                });
            }

            const updateData = { name, email, profilePic, experience, avancement,specialite, cursus};
            // If user wants to change password
            if (password.length > 0 || newPassword.length > 0) {
                const match = await bcrypt.compare(password, oldData.password);
                if (!match) {
                    return res.json({
                        status: 'success',
                        errors: { oldPassword: 'Old password is incorrect' },
                    });
                }

                if (newPassword.length <= 0) {
                    return res.json({
                        status: 'success',
                        errors: { newPassword: 'New password is empty' },
                    });
                }

                const encryPassword = await bcrypt.hash(newPassword, 12);
                updateData.password = encryPassword;
            }

            const doc = await User.findByIdAndUpdate(id, updateData, { new: true });

            const latestData = {
                id: doc._id,
                username: doc.username,
                email: doc.email,
                name: doc.name,
                profilePic: doc.profilePic,
                experience: doc.experience,
                avancement: doc.avancement,
                specialite: doc.specialite,
                cursus: doc.cursus,
               
                
            };

            const token = generateToken(latestData);

            return res.json({
                status: 'success',
                user: latestData,
                token,
                errors,
            });
        });
    } catch (error) {
        return res.json({
            status: 'success',
            errors: { serverError: error },
        });
    }
};
