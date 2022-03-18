import { Videos } from "./Videos";

export class Review {
  constructor(
    //レビューID
    private _reviewId: number,
    //アカウントID
    private _accountId: number,
    //動画
    private _videos: Videos,
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

  public get videos(): Videos {
    return this._videos;
  }

  public set videos(videos: Videos) {
    this._videos = videos;
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
