"use client";

import { useState, useEffect, useTransition, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Slider } from "../ui/slider";
import { Checkbox } from "../ui/checkbox";
import useSWR from "swr";
import { Skeleton } from "../ui/skeleton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { getCategories } from "@/app/_actions/products";
import { CategoryType } from "@/types";

function Filters({ categories }: { categories: CategoryType[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const categoriesParams = searchParams?.get("categories");
  const pageParams = searchParams?.get("categories") || "1";

  const createQueryString = useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }

      return newSearchParams.toString();
    },
    [searchParams]
  );

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const debouncedPrice = useDebounce(priceRange, 500);

  useEffect(() => {
    const [min, max] = debouncedPrice;
    startTransition(() => {
      router.push(
        `${pathname}?${createQueryString({
          price_range: `${min}-${max}`,
        })}`
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedPrice]);

  const [categoriesIds, setCategoriesIds] = useState<string[] | null>(
    categoriesParams?.split(".").map(String) ?? null
  );

  useEffect(() => {
    startTransition(() => {
      router.push(
        `${pathname}?${createQueryString({
          categories: categoriesIds?.length ? categoriesIds.join(".") : null,
        })}`
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriesIds]);

  return (
    <div className="sticky top-20 h-fit w-80  border bg-background shadow-sm">
      <div className="flex items-center justify-between p-4">
        <p className="font-bold">Filter</p>
        <Button variant={"outline"}>Reset</Button>
      </div>
      <Separator />
      <div className="p-4">
        <div className="mb-8">
          <p className="font-bold">Price</p>
        </div>
        <Slider
          variant="range"
          thickness="thin"
          defaultValue={[0, 500]}
          max={500}
          step={1}
          value={priceRange}
          onValueChange={(value: typeof priceRange) => {
            setPriceRange(value);
          }}
          className="mb-8 cursor-pointer"
        />
        <div className="flex items-center space-x-4">
          <Input
            type="number"
            inputMode="numeric"
            min={0}
            max={priceRange[1]}
            className="h-9"
            value={priceRange[0]}
            onChange={(e) => {
              const value = Number(e.target.value);
              setPriceRange([value, priceRange[1]]);
            }}
          />
          <span className="text-muted-foreground">-</span>
          <Input
            type="number"
            inputMode="numeric"
            min={priceRange[0]}
            max={500}
            className="h-9"
            value={priceRange[1]}
            onChange={(e) => {
              const value = Number(e.target.value);
              setPriceRange([priceRange[0], value]);
            }}
          />
        </div>
      </div>
      <Separator />
      <div className="p-4">
        <div className="mb-8">
          <p className="font-bold">Catrgory</p>
        </div>
        <div className="flex flex-col gap-4">
          {categories && categories.length > 0
            ? categories.map((item) => (
                <div key={item.id} className="flex items-center space-x-2">
                  <Checkbox
                    checked={categoriesIds?.includes(item.slug)}
                    id={item.slug}
                    onCheckedChange={(value) => {
                      if (value) {
                        setCategoriesIds([...(categoriesIds ?? []), item.slug]);
                      } else {
                        setCategoriesIds(
                          categoriesIds?.filter((id) => id !== item.slug) ??
                            null
                        );
                      }
                    }}
                  />
                  <label
                    htmlFor={item.slug}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item.name}
                  </label>
                </div>
              ))
            : null}
        </div>
      </div>
      <Separator />
    </div>
  );
}

export default Filters;
