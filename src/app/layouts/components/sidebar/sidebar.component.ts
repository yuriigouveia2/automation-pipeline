import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { AssetTypeEnum } from 'src/app/core/enums/asset-type.enum';
import { Util } from 'src/app/shared/util/util';
import { CONSTANTS } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  homeIcon = '';
  terminalIcon = '';
  status: boolean;

  constructor(
    private route: Router
   ) { }

  ngOnInit() {
    this.initVariables();
  }

  initVariables() {
    this.homeIcon = Util.getAssetHardly(AssetTypeEnum.ICONS, 'home-40.png');
    this.terminalIcon = Util.getAssetHardly(AssetTypeEnum.ICONS, 'terminal-48.png');
    this.status = false;
  }

  private isClickedEqualToCurrentUrl(clikedUrl) {
    const currentUrl = this.route.url;
    if (clikedUrl === currentUrl) {
      return true;
    }
    return false;
  }

  private waitThenGo(goToUrl: string) {
    this.status = !this.isClickedEqualToCurrentUrl(goToUrl);
    Util.delay().then(() => {
      this.route.navigate([goToUrl]);
    });
  }

  goHome() {
    this.waitThenGo(CONSTANTS.URL.HOME);
  }

  goProcess() {
    this.waitThenGo(CONSTANTS.URL.PROCESSES);
  }

}
