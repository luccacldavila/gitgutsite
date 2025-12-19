"use client";

import Fuse, { FuseResult } from "fuse.js";
import { useMemo, useState } from "react";

interface UseArrayFilterConfig<T> {
  keys: string[];
  threshold: number;
}

export const useArrayFilter = <T>({
  array,
  config,
  defaultValue = "",
}: {
  array: T[];
  config: UseArrayFilterConfig<T>;
  defaultValue?: string;
}) => {
  const fuse = new Fuse(array, config);
  const [searchValue, setSearchValue] = useState(defaultValue);
  const filteredArray = useMemo(() => {
    if (searchValue === "") {
      return array;
    } else {
      return fuse
        .search(searchValue)
        .map((result: FuseResult<unknown>) => result.item as T);
    }
  }, [fuse, searchValue, array]);

  return { filteredArray, setSearchValue, searchValue };
};
