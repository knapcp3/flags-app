import React from 'react'
import { createPortal } from 'react-dom'
import './modal.scss'

const modalRoot = document.getElementById('modal')
const modalOpenClass = 'modal-open'

class Modal extends React.Component {
  private el: HTMLDivElement
  constructor(props: any) {
    super(props)

    this.el = document.createElement('div')
  }

  public componentDidMount() {
    modalRoot!.appendChild(this.el)
    document.body.classList.add(modalOpenClass)
  }

  public componentWillUnmount() {
    modalRoot!.removeChild(this.el)
    document.body.classList.remove(modalOpenClass)
  }

  public render() {
    return createPortal(this.props.children, this.el)
  }
}

export default Modal
