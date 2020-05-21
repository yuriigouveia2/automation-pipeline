export class ColorScheme {
  public domain: string[];

  constructor(colorScheme?: ColorScheme) {
    if (colorScheme) {
      this.domain = colorScheme.domain;
    }
  }
}
