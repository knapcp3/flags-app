import React, { Component } from 'react'
import FlagPic from './Flag'
import './flags.scss'
import Flag from './../../models/Flag.model'
import Modal from './../Modal/Modal'
import { Icon } from 'antd'
import Stage from '../../modules/Stage'

export default class Flags extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      zoomedInFlag: null
    }
  }

  public onFlagClick = (fPath: string) => {
    const { stage, selectedFlag } = this.props
    if (stage === Stage.FlagSelecting) {
      selectedFlag(fPath)
    } else {
      this.setState({ zoomedInFlag: fPath })
    }
  }

  public handleClose = () => {
    this.setState({ zoomedInFlag: null })
  }

  public render() {
    const { flags } = this.props
    const { zoomedInFlag } = this.state
    return (
      <section className="flags-container">
        {flags.map((f: Flag) => (
          <FlagPic
            isSelected={f.isSelected}
            isRejected={f.isRejected}
            path={f.path}
            key={f.path}
            onFlagClick={this.onFlagClick}
          />
        ))}
        {zoomedInFlag && (
          <Modal>
            <div className="modal-content">
              <Icon type="close" onClick={this.handleClose} />
              <img src={zoomedInFlag} className="modal-flag-img" />
            </div>
          </Modal>
        )}
      </section>
    )
  }
}
