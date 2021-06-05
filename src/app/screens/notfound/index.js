import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./index.css";
import pageConsts from "../../consts/pageConsts.json";

class NotFoundScreen extends Component {
  onClickHome = () => {
    this.props.history.push(`${this.props.currentPath}/`);
  };

  render() {
    return (
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1 text-center">
                <img
                  alt="404 img"
                  src="https://i2.wp.com/www.silocreativo.com/en/wp-content/uploads/2017/11/diseno-web-404-CSS.gif"
                  className="four_zero_four_bg"
                ></img>
                <div className="contant_box_404">
                  <h3 className="h2">{pageConsts.not_found.main}</h3>
                  <p>{pageConsts.not_found.body}</p>
                  <button className="link_404" onClick={this.onClickHome}>
                    {pageConsts.not_found.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(NotFoundScreen);
