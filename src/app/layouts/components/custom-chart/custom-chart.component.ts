import { ChartTypeEnum } from './../../../core/enums/chart-type.enum';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { GraphicConfig } from 'src/app/core/models/graphic/graphic-config.model';

@Component({
  selector: 'app-custom-chart',
  templateUrl: './custom-chart.component.html',
  styleUrls: ['./custom-chart.component.scss']
})
export class CustomChartComponent implements OnInit {
  @Input() type: ChartTypeEnum;
  @Input() graphicConfig: GraphicConfig = new GraphicConfig();

  chartEnum: any;

  constructor() { }

  ngOnInit() {
    this.initVariables();
  }

  private initVariables = () => {
    this.chartEnum = {
      BAR: ChartTypeEnum.BAR,
      LIN: ChartTypeEnum.LIN,
      PIE: ChartTypeEnum.PIE,
      PIZ: ChartTypeEnum.PIZ,
    };
  }

  onSelect(event: any) {

  }
}
