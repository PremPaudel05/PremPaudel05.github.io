/** Prefix files in public/ when the portfolio is hosted under /repository-name. */
export function assetPath(path: `/${string}`): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
