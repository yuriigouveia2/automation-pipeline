import { EmitService } from './../../../shared/service/emit.service';
import { Router } from '@angular/router';
import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { AssetTypeEnum } from 'src/app/core/enums/asset-type.enum';
import { Util } from 'src/app/shared/util/util';
import { CONSTANTS } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  icons: any;
  status: boolean;
  url: any;

  constructor(
    private route: Router,
    private emitService: EmitService
   ) { }

  ngOnInit() {
    this.initVariables();
  }

  initVariables() {
    this.url = CONSTANTS.URL;
    this.icons = {
      home      : Util.getAssetHardly(AssetTypeEnum.ICONS, 'home-40.png'),
      terminal  : Util.getAssetHardly(AssetTypeEnum.ICONS, 'terminal-48.png'),
      test      : Util.getAssetHardly(AssetTypeEnum.ICONS, 'teste-40.png')
    };
    this.status = false;
  }

  private isClickedEqualToCurrentUrl(clikedUrl: string) {
    const currentUrl = this.route.url;
    if (clikedUrl === currentUrl) {
      return true;
    }
    return false;
  }

  private sidebarStatusOnClick(clikedUrl: string) {
    if (clikedUrl !== CONSTANTS.URL.HOME) {
      return true;
    }
    return false;
  }

  private waitThenGo(goToUrl: string) {
    const componentStatus = !this.isClickedEqualToCurrentUrl(goToUrl);
    const sidebarStatus = !this.sidebarStatusOnClick(goToUrl);

    this.status = sidebarStatus;
    this.emitService.emitStatusChange(componentStatus);
    Util.delay().then(() => {
      this.route.navigate([goToUrl]);
    });
  }

  goTo(path: string) {
    this.waitThenGo(path);
  }
}
