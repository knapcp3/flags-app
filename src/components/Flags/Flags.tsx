import React, { Component, RefObject } from 'react'
import FlagPic from './Flag'
import './flags.scss'
import Flag from './../../models/Flag.model'

export default class Flags extends Component<any, any> {
  private flagsRef: RefObject<any>

  constructor(props: any) {
    super(props)
    this.flagsRef = React.createRef()
  }

  public componentDidMount() {
    this.flagsRef.current.addEventListener('click', this.handleFlagsClick)
  }

  public handleFlagsClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.classList.contains('flag-img')) {
      const { selectedFlag } = this.props
      selectedFlag(target.getAttribute('src'))
      this.flagsRef.current.removeEventListener('click', this.handleFlagsClick)
    }
  }

  public render() {
    const { flags, selectedFlag } = this.props
    return (
      <section className="flags-container" ref={this.flagsRef}>
        {flags.map((f: Flag) => (
          <FlagPic
            isSelected={f.isSelected}
            isRejected={f.isRejected}
            path={f.path}
            key={f.path}
          />
        ))}
      </section>
    )
  }
}
