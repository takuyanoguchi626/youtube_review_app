export class Statistics {
  constructor(
    private _hiddenSubscriberCount: boolean,
    private _subscriberCount: string,
    private _videoCount: string,
    private _viewCount: string
  ) {}

  public get hiddenSubscriberCount(): boolean {
    return this._hiddenSubscriberCount;
  }

  public set hiddenSubscriberCount(hiddenSubscriberCount: boolean) {
    this._hiddenSubscriberCount = hiddenSubscriberCount;
  }

  public get subscriberCount(): string {
    return this._subscriberCount;
  }

  public set subscriberCount(subscriberCount: string) {
    this._subscriberCount = subscriberCount;
  }

  public get videoCount(): string {
    return this._videoCount;
  }

  public set videoCount(videoCount: string) {
    this._videoCount = videoCount;
  }

  public get viewCount(): string {
    return this._viewCount;
  }

  public set viewCount(viewCount: string) {
    this._viewCount = viewCount;
  }
}
