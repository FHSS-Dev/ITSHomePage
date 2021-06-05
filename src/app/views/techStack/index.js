import React, { Component } from "react"
import pageConsts from "../../consts/pageConsts.json"
import { Images } from "../../theme/Images"
import "./index.css"

export default class TechStackView extends Component {
  render() {
    const { stack } = pageConsts.techStack
    return (
      <div className="content" id="tech">
        <h2 className="tech-stack-title">{pageConsts.techStack.title}</h2>
        <div className="stack-div">
          {Array(stack.length)
            .fill()
            .map((_, i) => i)
            .map(i => (
              <img
                className="stack-img"
                alt={`${stack[i].title} Figure`}
                src={Images.stack[stack[i].imgName]}
              />
            ))}
        </div>
      </div>
    )
  }
}
