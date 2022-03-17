export class Thumnails {
  constructor(
    private _defaultSize: string,
    private _highSize: string,
    private _mediumSize: string
  ) {}

  public get defaultSize(): string {
    return this._defaultSize;
  }

  public set defaultSize(defaultSize: string) {
    this._defaultSize = defaultSize;
  }

  public get highSize(): string {
    return this._highSize;
  }

  public set highSize(highSize: string) {
    this._highSize = highSize;
  }

  public get mediumSize(): string {
    return this._mediumSize;
  }

  public set mediumSize(mediumSize: string) {
    this._mediumSize = mediumSize;
  }
}
