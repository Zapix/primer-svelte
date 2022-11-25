import octicons from "@primer/octicons";

import { sizeMap } from "./utils";
import type { SizeName } from "./utils";

export const iconTypes = Array.from(
  Object.keys(octicons)
) as octicons.IconName[];
export const sizeTypes = Array.from(Object.keys(sizeMap)) as SizeName[];
