import React, { Component } from "react";

export class Banner extends Component {
  render() {
    return (
        <div className="card banner-card">
        <img src="data:image/jpeg;base64,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" className="card-img-top banner-img" alt="..."/>
        
          <h5 className="card-title banner-title">Card title</h5>
          <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    );
  }
}

export default Banner;
