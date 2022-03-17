import { Account } from "./Account";
import { Videos } from "./Videos";

export class Review {
  constructor(
    //アカウント
    private _account: Account,
    //動画
    private _video: Videos,
    //レビュー
    private _review: string,
    //いいね数
    private _favoriteCount: number
  ) {}

  public get account(): Account {
    return this._account;
  }

  public set account(account: Account) {
    this._account = account;
  }

  public get video(): Videos {
    return this._video;
  }

  public set video(video: Videos) {
    this._video = video;
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
