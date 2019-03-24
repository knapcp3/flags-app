import React, { Component, RefObject } from 'react'
import FlagPic from './Flag'
import './flags.scss'
import Flag from './../../models/Flag.model'
import Modal from './../Modal/Modal'
import { Icon } from 'antd'
import Stage from '../../modules/Stage'

export default class Flags extends Component<any, any> {
  private flagsRef: RefObject<any>

  constructor(props: any) {
    super(props)
    this.flagsRef = React.createRef()

    this.state = {
      showModal: false,
      zoomedInFlag: null
    }
  }

  public componentDidMount() {
    this.flagsRef.current.addEventListener('click', this.handleFlagsClick)
  }

  public componentDidUpdate(prevProps: any) {
    const { stage } = this.props
    if (stage !== prevProps.stage) {
      if (stage === Stage.FlagSelecting) {
        this.flagsRef.current.addEventListener('click', this.handleFlagsClick)
      } else if (stage === Stage.Questions) {
        this.flagsRef.current.removeEventListener(
          'click',
          this.handleFlagsClick
        )
      }
    }
  }

  public handleFlagsClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.classList.contains('flag-img')) {
      const { selectedFlag } = this.props
      selectedFlag(target.getAttribute('src'))
    }
  }

  public onZoomedInFlag = (fPath: string) => {
    this.setState({ zoomedInFlag: fPath, showModal: true })
  }

  public handleClose = () => {
    this.setState({ zoomedInFlag: null, showModal: false })
  }

  public render() {
    const { flags } = this.props
    const { showModal, zoomedInFlag } = this.state
    return (
      <section className="flags-container" ref={this.flagsRef}>
        {flags.map((f: Flag) => (
          <FlagPic
            isSelected={f.isSelected}
            isRejected={f.isRejected}
            path={f.path}
            key={f.path}
            onZoomedInFlag={this.onZoomedInFlag}
          />
        ))}
        {showModal && (
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
