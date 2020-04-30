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

  terminal = '';
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
    this.terminal = Util.getAssetHardly(AssetTypeEnum.ICONS, 'terminal-48.png');
    this.status = false;
  }

  private setPathLocalStorage() {
    if (!localStorage.getItem('pathAssets')) {
      localStorage.setItem('pathAssets',  `${window.location.pathname}assets`);
    }
  }

  goToProcess() {
    this.status = true;
    Util.delay(700).then(() => {
      this.route.navigate(['/content/processos']);
    });
  }

}
