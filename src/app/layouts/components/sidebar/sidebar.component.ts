import { Component, OnInit, Inject } from '@angular/core';
import { AssetTypeEnum } from 'src/app/core/enums/asset-type.enum';
import { Util } from 'src/app/shared/util/util';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  homeIcon = '';
  terminalIcon = '';

  constructor(  ) { }

  ngOnInit() {
    this.homeIcon = Util.getAssetHardly(AssetTypeEnum.ICONS, 'home-40.png');
    this.terminalIcon = Util.getAssetHardly(AssetTypeEnum.ICONS, 'terminal-48.png');
  }

  goHome() {

  }

  goProcess() {

  }

}
