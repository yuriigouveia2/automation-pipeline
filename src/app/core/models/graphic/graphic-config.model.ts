import { ColorScheme } from './color-scheme.model';
import { GraphicData } from './graphic-data.model';

export class GraphicConfig {
  public view           ?: Array<number> = [];
  public colorScheme    : ColorScheme = new ColorScheme();
  public results        ?: GraphicData[] = [];
  public gradient        = false;
  public showXAxis       = true;
  public showYAxis       = true;
  public showLegend      = true;
  public showXAxisLabel  = false;
  public showYAxisLabel  = false;
  public xAxisLabel     ?: string;
  public yAxisLabel     ?: string;

  constructor(config?: any) {
    if (config) {
      this.view           = config.view           ? config.view           : [];
      this.results        = config.results        ? config.results        : [];
      this.gradient       = config.gradient       ? config.gradient       : false;
      this.showXAxis      = config.showXAxis      ? config.showXAxis      : true;
      this.showYAxis      = config.showYAxis      ? config.showYAxis      : true;
      this.showLegend     = config.showLegend     ? config.showLegend     : true;
      this.showXAxisLabel = config.showXAxisLabel ? config.showXAxisLabel : false;
      this.showYAxisLabel = config.showYAxisLabel ? config.showYAxisLabel : false;
      this.colorScheme    = config.colorScheme    ? config.colorScheme    : new ColorScheme();
      this.xAxisLabel     = config.xAxisLabel;
      this.yAxisLabel     = config.yAxisLabel;
    }
  }
}
