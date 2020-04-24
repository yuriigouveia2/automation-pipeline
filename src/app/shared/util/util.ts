import { AssetType, AssetTypeEnum } from './../../core/enums/asset-type.enum';

export class Util {

  static getAssetHardly(assetType: AssetTypeEnum, file: string) {
    const assetTypeStr = new AssetType(assetType);
    return `${window.location.pathname}assets/${assetTypeStr.descricao}/${file}`;
  }
}
