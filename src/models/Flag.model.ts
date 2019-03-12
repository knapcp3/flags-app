export default class Flag {
  private _path: string
  private _isSelected: boolean
  private _isRejected: boolean

  constructor(path: string, sel: boolean, rej: boolean) {
    this._path = path
    this._isSelected = sel
    this._isRejected = rej
  }

  public static create(path: string) {
    return new Flag(path, false, false)
  }

  public setIsSelected(isSel: boolean) {
    return new Flag(this._path, isSel, this._isRejected)
  }

  public setIsRejected(isRej: boolean) {
    return new Flag(this._path, this._isSelected, isRej)
  }

  public get isSelected(): boolean {
    return this._isSelected
  }

  public get isRejected(): boolean {
    return this._isRejected
  }
  public get path(): string {
    return this._path
  }
}
