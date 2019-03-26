import Node from './Node'

export default class BinaryTree<T> {
  public root: Node<T> | null

  constructor(root: Node<T> | null) {
    this.root = root
  }
}


