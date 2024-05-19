import { makeAutoObservable } from "mobx";
import { Asset } from "@chain-registry/types";

export default class Store {
  assetList: Array<Asset> = [];

  constructor() {
    makeAutoObservable(this);
  }

  setAssetList(value: Array<Asset>) {
    this.assetList = value;
  }
}
