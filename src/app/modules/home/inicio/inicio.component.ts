import { Util } from './../../../shared/util/util';
import { Component, OnInit } from '@angular/core';
import { AssetTypeEnum } from 'src/app/core/enums/asset-type.enum';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  terminal = '';
  constructor() {
    this.setPathLocalStorage();
  }

  ngOnInit() {
    this.terminal = Util.getAssetHardly(AssetTypeEnum.ICONS, 'terminal-48.png');
  }

  private setPathLocalStorage() {
    if (!localStorage.getItem('pathAssets')) {
      localStorage.setItem('pathAssets',  `${window.location.pathname}assets`);
    }
  }

}
