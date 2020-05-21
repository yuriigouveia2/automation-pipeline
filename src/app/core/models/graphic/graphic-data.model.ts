export class GraphicData {
  public name  ?: string;
  public value ?: any;

  constructor(data?: GraphicData) {
    if (data) {
      this.name  = data.name;
      this.value = data.value;
    }
  }
}
