import __ from "lodash/fp/__";
import pipe from "lodash/fp/pipe";
import get from "lodash/fp/get";
import keys from "lodash/fp/keys";
import map from "lodash/fp/map";
import partial from "lodash/fp/partial";
import identity from "lodash/identity";

import type { Icon, IconSize } from "@primer/octicons";

export type SizeName = "small" | "medium" | "large";

export type SizeMap = Record<SizeName, number>;

export const sizeMap: SizeMap = {
  small: 16,
  medium: 32,
  large: 64,
};

export const getSize = get(__, sizeMap);

export const getIconHeights = pipe(
  get<Icon, "heights">("heights"),
  keys,
  map(partial(parseInt, [__, 10])),
  map<number, IconSize>(identity)
);

export function closestNaturalHeight(
  naturalHeights: IconSize[],
  height: number
): IconSize {
  return naturalHeights.reduce(
    (acc, naturalHeight) => (naturalHeight <= height ? naturalHeight : acc),
    naturalHeights[0]
  );
}
