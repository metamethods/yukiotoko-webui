export default class Version {
  constructor(
    public major: number,
    public minor: number,
    public patch: number
  ) {}

  public static fromString(versionString: string): Version {
    const [_, major, minor, patch] = /(\d+)\.(\d+)\.(\d+)/.exec(
      versionString
    ) ?? [null, -1, -1, -1];
    return new Version(Number(major), Number(minor), Number(patch));
  }

  public static gt(main: string, other: string): boolean {
    return Version.fromString(main).gt(Version.fromString(other));
  }

  public gt(other: Version): boolean {
    return (
      this.major > other.major ||
      (this.major === other.major && this.minor > other.minor) ||
      (this.major === other.major &&
        this.minor === other.minor &&
        this.patch > other.patch)
    );
  }
}
