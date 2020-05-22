export class ColorScheme {
  public domain: string[] = ['#5AA454'];

  constructor(colorScheme?: ColorScheme) {
    if (colorScheme) {
      this.domain = colorScheme.domain;
    }
  }
}
