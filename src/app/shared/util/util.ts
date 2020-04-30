import { AssetType, AssetTypeEnum } from './../../core/enums/asset-type.enum';

export class Util {

  static getAssetHardly(assetType: AssetTypeEnum, file: string) {
    const assetTypeStr = new AssetType(assetType);
    return `${this.getPathAssets()}/${assetTypeStr.descricao}/${file}`;
  }

  static getPathAssets() {
    return localStorage.getItem('pathAssets');
  }

  static async delay(ms: number = 700) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
