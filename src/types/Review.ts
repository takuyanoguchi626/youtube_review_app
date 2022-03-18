export class Review {
  constructor(
    //
    private _reviewId: number,
    //アカウント
    private _accountId: number,
    //動画
    private _videoId: number,
    //レビュー
    private _review: string,
    //いいね数
    private _favoriteCount: number
  ) {}

  public get reviewId(): number {
    return this._reviewId;
  }

  public set reviewId(reviewId: number) {
    this._reviewId = reviewId;
  }

  public get accountId(): number {
    return this._accountId;
  }

  public set accountId(accountId: number) {
    this._accountId = accountId;
  }

  public get videoId(): number {
    return this._videoId;
  }

  public set videoId(videoId: number) {
    this._videoId = videoId;
  }

  public get review(): string {
    return this._review;
  }

  public set review(review: string) {
    this._review = review;
  }

  public get favoriteCount(): number {
    return this._favoriteCount;
  }

  public set favoriteCount(favoriteCount: number) {
    this._favoriteCount = favoriteCount;
  }
}
