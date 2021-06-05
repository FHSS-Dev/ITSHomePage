import React, { Component } from "react"
import Card from "../../components/card"
import pageConsts from "../../consts/pageConsts.json"
import "./index.css"
import { Images } from "../../theme/Images"

export default class WorkView extends Component {
  render() {
    const { items } = pageConsts.work
    return (
      <div className="content" id="work">
        <h2 className="work-title">{pageConsts.work.title}</h2>
        <div className="work-card-container">
          {Array(items.length)
            .fill()
            .map((_, i) => i)
            .map(i => (
              <Card
                description={items[i].description}
                image={Images.work[items[i].imgName]}
                title={items[i].title}
                isAvailable={items[i].isAvailable}
              />
            ))}
        </div>
      </div>
    )
  }
}
