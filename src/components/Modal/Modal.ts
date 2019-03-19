import React from 'react'
import { createPortal } from 'react-dom'
import './modal.scss'

const modalRoot = document.getElementById('modal')

class Modal extends React.Component {
  private el: HTMLDivElement
  constructor(props: any) {
    super(props)

    this.el = document.createElement('div')
  }

  public componentDidMount() {
    modalRoot!.appendChild(this.el)
  }

  public componentWillUnmount() {
    modalRoot!.removeChild(this.el)
  }

  public render() {
    return createPortal(this.props.children, this.el)
  }
}

export default Modal
