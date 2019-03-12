import React, { Component } from 'react'
import { Button } from 'antd'
import './top-nav.scss'

export default class TopNav extends Component<any, any> {
  public render() {
    const { question } = this.props
    return (
      <div className="top-nav-container">
        <div className="center-content">
          <section className="question">
            {question}
          </section>
          <div>
            <Button>Yes</Button>
          </div>
          <div>
            <Button>No</Button>
          </div>
        </div>
      </div>
    )
  }
}
