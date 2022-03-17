import { Localized } from "@/types/Localized";
import { Thumnails } from "@/types/Thumnails";

export class Snippet {
  constructor(
    private _country: string,
    private _description: string,
    private _localized: Array<Localized>,
    private _publishedAt: Date,
    private _thumbnails: Array<Thumnails>
  ) {}

  public get country(): string {
    return this._country;
  }

  public set country(country: string) {
    this._country = country;
  }

  public get description(): string {
    return this._description;
  }

  public set description(description: string) {
    this._description = description;
  }

  public get localized(): Array<Localized> {
    return this._localized;
  }

  public set localized(localized: Array<Localized>) {
    this._localized = localized;
  }

  public get publishedAt(): Date {
    return this._publishedAt;
  }

  public set publishedAt(publishedAt: Date) {
    this._publishedAt = publishedAt;
  }

  public get thumbnails(): Array<Thumnails> {
    return this._thumbnails;
  }

  public set thumbnails(thumbnails: Array<Thumnails>) {
    this._thumbnails = thumbnails;
  }
}
