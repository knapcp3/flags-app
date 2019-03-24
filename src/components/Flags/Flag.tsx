import React, { Component, MouseEvent } from 'react'

export default class Flags extends Component<any, any> {
  // public handleDbClick = (fPath: string) => (e: MouseEvent) => {
  //   this.props.onZoomedInFlag(fPath)
  // }

  public handleClick = (fPath: string) => (e: MouseEvent) => {
    this.props.onFlagClick(fPath)
  }

  public render() {
    const { path, isSelected, isRejected } = this.props
    const maybeRejected = isRejected ? 'rejected' : ''
    const maybeSelected = isSelected ? 'selected' : ''
    return (
      <div className="flag-container">
        <img
          onClick={this.handleClick(path)}
          src={path}
          alt="flag image"
          className={`flag-img ${maybeRejected} ${maybeSelected}`}
        />
      </div>
    )
  }
}
