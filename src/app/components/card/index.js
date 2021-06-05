import React, { Component } from "react"
import "./index.css"
import pageConsts from "../../consts/pageConsts.json"

export default class Card extends Component {
  render() {
    const { isAvailable } = this.props
    return (
      <div className="card-content card-shadow ">
        <img
          className="card-image"
          alt={`${this.props.title} Figure`}
          src={this.props.image}
        />
        <h4 className="card-title">{this.props.title}</h4>
        <span className="card-desc">{this.props.description}</span>
        <button
          type="button"
          className={`card-button ${isAvailable ? "" : "disabled"}`}
          disabled={!isAvailable}
          onClick={() => window.open(this.props.href)}
        >
          {isAvailable
            ? pageConsts.buttons.letMeSee
            : pageConsts.buttons.coming}
        </button>
      </div>
    )
  }
}
