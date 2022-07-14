import React ,{useState} from 'react'

export default function Search() {
    const [q,setQ] = useState("");
    const [searchParam] = useState(["denomination","directeur","code","etablissemnt",])
  return (
      <div className='container'>
          <div className='row'>
              <div className='col-md-5'>
                  <div className='side_bar_blog'>
                <div class="side_bar_search">
                    <div class="input-group stylish-input-group">
                        <input class="form-control" placeholder="Chercher" type="text"  value={q} onChange={ (e) => setQ(e.target.value)}/>
                        <span class="input-group-addon">
                            <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                        </span>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
     
  )
}
