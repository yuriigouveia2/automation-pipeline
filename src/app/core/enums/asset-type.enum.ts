
export enum AssetTypeEnum {
  ICONS   = 1,
  IMG    = 2,
  LIBS   = 3,
  STYLES = 4
}


const AssetTypeDescricao = new Map<number, string>([
  [AssetTypeEnum.ICONS  , 'icons'  ],
  [AssetTypeEnum.IMG   , 'img'   ],
  [AssetTypeEnum.LIBS  , 'libs'  ],
  [AssetTypeEnum.STYLES, 'styles']
]);

export class AssetType {
  public id: number;
  public descricao: string;

  constructor(id: number) {
    if (id) {
      this.id = id;
      this.descricao = this.getDescricao(id);
    }
  }

  getAll(): any[] {
    return Object.keys(AssetTypeEnum)
                .filter(k => isNaN(Number(k)))
                .map(k => this.getObject(AssetTypeEnum[k]));
  }

  getBySearch(search: string): AssetType[] {
    return this.getAll().filter(a => a.descricao.toLowerCase().includes(search.toLowerCase()));
  }

  getObject(id: number) {
    return {
      id,
      descricao: this.getDescricao(id)
    };
  }

  getDescricao(item: AssetTypeEnum) {
    return AssetTypeDescricao.get(item);
  }

}
