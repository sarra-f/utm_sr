import React from 'react'

export default function BannerV2(props) {
  return (
    <div id="inner_banner" className="section inner_banner_section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="full">
            <div className="title-holder">
              <div className="title-holder-cell text-left">
                <h1 className="page-title">{props.title}</h1>
                <ol className="breadcrumb">
                <li><a href="index.html">Accueil</a></li>
                <li>{props.subtitle}</li>
                <li className="active">{props.title} </li>
              </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
