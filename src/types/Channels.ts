import { Snippet } from "@/types/Snippet";
import { Statistics } from "@/types/Statistics";

export class Youtube {
  constructor(
    private _etag: string,
    private _id: string,
    private _kind: string,
    private _snippetList: Array<Snippet>,
    private _statisticsList: Array<Statistics>
  ) {}

  public get etag(): string {
    return this._etag;
  }

  public set etag(etag: string) {
    this._etag = etag;
  }

  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get kind(): string {
    return this._kind;
  }

  public set kind(kind: string) {
    this._kind = kind;
  }

  public get snippetList(): Array<Snippet> {
    return this._snippetList;
  }

  public set snippetList(snippetList: Array<Snippet>) {
    this._snippetList = snippetList;
  }

  public get statisticsList(): Array<Statistics> {
    return this._statisticsList;
  }

  public set statisticsList(statisticsList: Array<Statistics>) {
    this._statisticsList = statisticsList;
  }
}
