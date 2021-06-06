import React, { Component } from "react";
import "./index.css";
import pageConsts from "../../consts/pageConsts.json";

export default class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <div className="footer-container">
        <div className="footer-item-container">
          <span className="copyright-text">{`${pageConsts.footer.copyright.replace(
            "{year}",
            year
          )} ${pageConsts.footer.all_rights}`}</span>
          <span className="poweredby-text">
            {pageConsts.footer.powered}
            <a className="link-color" href={pageConsts.footer.cdepd_link}>
              {pageConsts.footer.cdepd}
            </a>
          </span>
        </div>
      </div>
    );
  }
}
