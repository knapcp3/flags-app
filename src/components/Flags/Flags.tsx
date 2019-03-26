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
    const { stage, onSelectedFlag } = this.props
    if (stage === Stage.FlagSelecting) {
      onSelectedFlag(fPath)
    } else {
      this.setState({ zoomedInFlag: fPath })
    }
  }

  public handleZoomedInFlagClose = () => {
    this.setState({ zoomedInFlag: null })
  }

  public render() {
    const { flags, finalFlags, onFinalFlagsClose } = this.props
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
              <Icon type="close" onClick={this.handleZoomedInFlagClose} />
              <img src={zoomedInFlag} className="modal-flag-img" />
            </div>
          </Modal>
        )}
        {finalFlags && (
          <Modal>
            <div className="modal-content">
              <Icon type="close" onClick={onFinalFlagsClose} />
              <div>Wybrana flaga/flagi:</div>
              {finalFlags.map((f: string) => (
                <img className="modal-flag-img" src={f} key={f} />
              ))}
            </div>
          </Modal>
        )}
      </section>
    )
  }
}
