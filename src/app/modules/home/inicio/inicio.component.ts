import { Util } from 'src/app/shared/util/util';
import { Component, OnInit } from '@angular/core';
import { AssetTypeEnum } from 'src/app/core/enums/asset-type.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  terminalIcon = '';
  testIcon = '';
  status: boolean;

  constructor(
    private route: Router
  ) {
    this.setPathLocalStorage();
  }

  ngOnInit() {
    this.initVariables();
  }

  private initVariables() {
    this.terminalIcon = Util.getAssetHardly(AssetTypeEnum.ICONS, 'terminal-48.png');
    this.testIcon = Util.getAssetHardly(AssetTypeEnum.ICONS, 'teste-40.png');
    this.status = false;
  }

  private setPathLocalStorage() {
    if (!localStorage.getItem('pathAssets')) {
      localStorage.setItem('pathAssets',  `${window.location.pathname}assets`);
    }
  }

  goToContent(path: string) {
    this.status = true;
    Util.delay(700).then(() => {
      this.route.navigate([path]);
    });
  }

}
