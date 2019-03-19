import React, { Component, MouseEvent } from 'react'
import Stage from './../../modules/Stage'
import { Button } from 'antd'
import './top-nav.scss'

export default class TopNav extends Component<any, any> {
  public onAnswer = (answer: boolean) => (_: MouseEvent) => {
    this.props.selectedAnswer(answer)
  }

  public render() {
    const { question, stage } = this.props
    return (
      <div className="top-nav-container">
        <div className="center-content">
          {stage === Stage.Questions && (
            <React.Fragment>
              <section className="question">{question}</section>
              <div>
                <Button onClick={this.onAnswer(true)}>Yes</Button>
              </div>
              <div>
                <Button onClick={this.onAnswer(false)}>No</Button>
              </div>
            </React.Fragment>
          )}
          {stage === Stage.FlagSelecting && (
            <React.Fragment>Select one flag</React.Fragment>
          )}
          {stage === Stage.End && <React.Fragment>ENDDD</React.Fragment>}
        </div>
      </div>
    )
  }
}
