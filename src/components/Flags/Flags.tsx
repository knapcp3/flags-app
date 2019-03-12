import React, { Component } from 'react'
import FlagPic from './Flag'
import { importAll } from './../../modules/helpers'
import './flags.scss'
import Flag from './../../models/Flag.model'

export default class Flags extends Component<any, any> {
  constructor(props: any) {
    super(props)
    const flags = importAll(
      require.context('./../../img/flags', false, /\.(png|jpe?g|svg)$/)
    ).map((f: string) => Flag.create(f))
    this.state = {
      flags,
      showModal: true
    }
  }

  public componentDidMount() {
    // this.setState({
    //   flags: this.state.flags.push(im)
    // })
  }

  public render() {
    const { flags } = this.state
    return (
      <section className="flags-container">
        {flags.map((f: Flag, i: number) => (
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
