import React, { Component } from 'react'

export default class Flags extends Component<any, any> {
  //   constructor(props: any) {
  //     super(props)
  //     this.setState({
  //     })
  //   }

  public render() {
    const { path, isSelected, isRejected } = this.props
    const maybeRejected = isRejected ? 'rejected' : ''
    const maybeSelected = isSelected ? 'selected' : ''
    return (
      <div className="flag-container">
        <img
          src={path}
          alt="flag image"
          className={`flag-img ${maybeRejected} ${maybeSelected}`}
        />
      </div>
    )
  }
}
