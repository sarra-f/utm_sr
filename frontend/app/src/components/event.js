import React from 'react'

export const Event = () => {
  return (
    <div className="section padding_layout_1" style={{paddingTop: `20px`}}>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="full">
          <div className="main_heading text_align_left">
            <h2>Agenda</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-3">
        <div className="full blog_colum">
          <div className="blog_feature_img"> <a href="it_blog_detail.html"><img src="assets/images/it_service/post-03.jpg" alt="#" /></a> </div>
          <div className="post_time">
            <p><i className="fa fa-calendar"></i> Mai 14, 2022</p>
          </div>
          <div className="blog_feature_head">
            <a href="it_blog_detail.html"><h4>Titre de l'evenements</h4></a>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="full blog_colum">
          <div className="blog_feature_img"> <a href="it_blog_detail.html"><img src="assets/images/it_service/actu3.png" alt="#" /> </a></div>
          <div className="post_time">
            <p><i className="fa fa-calendar"></i> Mai 26, 2022 </p>
          </div>
          <div className="blog_feature_head">
            <a href="it_blog_detail.html"><h4>Titre evenement</h4></a>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="full blog_colum">
          <div className="blog_feature_img"> <a href="it_blog_detail.html"><img src="assets/images/it_service/actu5.jpg" alt="#" /></a> </div>
          <div className="post_time">
            <p><i className="fa fa-calendar"></i> Juin 1, 2022</p>
          </div>
          <div className="blog_feature_head">
            <a href="it_blog_detail.html"><h4>Titre evenement</h4></a>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="full blog_colum">
          <div className="blog_feature_img"> <a href="it_blog_detail.html"><img src="assets/images/it_service/post-05.jpg" alt="#" /></a> </div>
          <div className="post_time">
            <p><i className="fa fa-calendar"></i> Juin 8, 2022</p>
          </div>
          <div className="blog_feature_head">
            <a href="it_blog_detail.html"><h4>Titre evenement </h4></a>
          </div>
        </div>
      </div>
     
     </div>
     <div className="row"></div>
     <div className="col-lg-12">
      <a className="btn main_bt" href="it_blog.html">Voir tout</a>
    </div>
    
  </div>
</div>

  )
}
export default Event
