import React, { Component, MouseEvent } from 'react'
import Stage from './../../modules/Stage'
import { Button } from 'antd'
import './top-nav.scss'

export default class TopNav extends Component<any, any> {
  public onAnswer = (answer: boolean) => (_: MouseEvent) => {
    this.props.selectedAnswer(answer)
  }

  public render() {
    const { question, stage, reset } = this.props
    return (
      <div className="top-nav-container">
        <div>
          <Button onClick={reset}>Reset</Button>
        </div>
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
            <React.Fragment>Wybierz jedną flagę</React.Fragment>
          )}
          {stage === Stage.End && (
            <React.Fragment>Wybieranie zakończone</React.Fragment>
          )}
        </div>
      </div>
    )
  }
}
