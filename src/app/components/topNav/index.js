import React, { Component } from "react"
import { HashLink } from "react-router-hash-link"

import pageConstants from "../../consts/pageConsts.json"
import { Images } from "../../theme/Images"
import "./index.css"

export default class TopNavBar extends Component {
  constructor() {
    super()
    this.NavItems = Object.values(NavItems)
  }

  onClickNavItem = item => {
    switch (item.value) {
      case NavItems.Home.value:
        break
      case NavItems.About.value:
        break
      case NavItems.Work.value:
        break
      case NavItems.Tech.value:
        break
      default:
        break
    }
  }

  render() {
    return (
      <div className="top-nav-bar">
        <img
          onClick={() => window.open("http://cdepd.fhss.sjp.ac.lk")}
          className="cdepd-logo"
          src={Images.CDEPD}
          alt="CDEPD Logo"
        />
        <div className="top-nav-items">
          {Array(this.NavItems.length)
            .fill()
            .map((_, i) => i)
            .map(i => (
              <HashLink
                smooth
                key={this.NavItems[i].id}
                to={this.NavItems[i].href}
                className="top-nav-text"
              >
                {pageConstants.top_nav[this.NavItems[i].id]}
              </HashLink>
            ))}
        </div>
      </div>
    )
  }
}

const NavItems = {
  Home: {
    id: "home",
    value: "Home",
    href: "",
  },
  About: {
    id: "about",
    value: "About",
    href: "/",
  },
  Work: {
    id: "work",
    value: "Work",
    href: "#work",
  },
  Tech: {
    id: "tech",
    value: "Tech Stack",
    href: "#tech",
  },
}
