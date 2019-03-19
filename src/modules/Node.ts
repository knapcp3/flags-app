export default class Node<T> {
  public value: T
  public left: Node<T> | null
  public right: Node<T> | null

  constructor(value: T, left: Node<T> | null, right: Node<T> | null) {
    this.value = value
    this.left = left
    this.right = right
  }

  public isLeaf() {
    return this.left == null && this.right == null
  }
}
