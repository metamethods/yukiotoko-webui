import { clamp } from '$lib/clamp';

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

  public static eq(main: string, other: string): boolean {
    return Version.fromString(main).eq(Version.fromString(other));
  }

  public clampMax(maxVersion: Version) {
    this.major = clamp(this.major, 0, maxVersion.major);
    this.minor = clamp(this.minor, 0, maxVersion.minor);
    this.patch = clamp(this.patch, 0, maxVersion.patch);
  }

  public eq(other: Version): boolean {
    return (
      this.major === other.major &&
      this.minor === other.minor &&
      this.patch === other.patch
    );
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
