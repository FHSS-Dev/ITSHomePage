import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import MetaTags from "react-meta-tags"
import "./index.css"

import metaConsts from "../../consts/metaConsts.json"
import pageConsts from "../../consts/pageConsts.json"
import TopNavBar from "../../components/topNav"
import WorkView from "../../views/work"
import TechStackView from "../../views/techStack"

class Home extends Component {
  render() {
    return (
      <div className="container">
        <MetaTags>
          <title>{metaConsts.home.title}</title>
          <meta name="description" content={metaConsts.home.desc} />
          <meta property="og:title" content={metaConsts.home.title} />
        </MetaTags>
        <TopNavBar
          currentPath={this.props.currentPath}
          history={this.props.history}
        />
        <div className="content home-greeting">
          <h4 className="small-greet">{pageConsts.home.smallgreet}</h4>
          <h1 className="greet">{pageConsts.home.greet}</h1>
          <h4 className="bottom-greet">{pageConsts.home.bottomgreet}</h4>
        </div>
        <WorkView />
        <TechStackView />
      </div>
    )
  }
}

export default withRouter(Home)
