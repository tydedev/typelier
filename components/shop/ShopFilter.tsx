"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "../ui/button";
import { Label } from "../ui/label";

import { Check, ChevronsUpDown } from "lucide-react";

import { useSearchParams } from "next/navigation";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { useState } from "react";
import { useTranslations } from "next-intl";

type Props = {
  label: string;
  filterKey: "category" | "format";
  options: string[];
  updateFilter: (key: string, value: string) => void;
};

export default function ShopFilterCombobox({
  label,
  filterKey,
  options,
  updateFilter,
}: Props) {
  const searchParams = useSearchParams();

  const t = useTranslations("Shop.options");
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const selected =
    searchParams.get(filterKey)?.split("+").filter(Boolean) ?? [];

  const formatLabel = (value: string) =>
    value.replace(/\b\w/g, (char) => char.toUpperCase());

  const toggleOption = (value: string) => {
    const next = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];

    updateFilter(filterKey, next.join("+"));
  };

  const clearFilter = () => {
    updateFilter(filterKey, "all");
    setPopoverOpen(false);
    setDrawerOpen(false);
  };

  const buttonLabel =
    selected.length === 0 ? t("all") : selected.map(formatLabel).join(", ");

  return (
    <div className="w-full">
      <Label className="mb-2 text-xs uppercase tracking-wider text-foreground/60">
        {label}
      </Label>

      {/* Desktop */}
      <div className="hidden md:block">
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className="w-full justify-between font-normal"
            >
              <span className="truncate">{buttonLabel}</span>

              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            className="w-[--radix-popover-trigger-width] p-0"
            side="bottom"
            align="end"
          >
            <Command>
              <CommandInput placeholder={`Search ${label.toLowerCase()}...`} />

              <CommandEmpty>No {label.toLowerCase()} found.</CommandEmpty>

              <CommandGroup className="max-h-75 overflow-y-auto">
                <CommandItem value="all" onSelect={clearFilter}>
                  <Check
                    className={`mr-2 h-4 w-4 ${
                      selected.length === 0 ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {t("all")}
                </CommandItem>

                {options.map((option) => {
                  const value = option.toLowerCase();
                  const isSelected = selected.includes(value);

                  return (
                    <CommandItem
                      key={value}
                      value={value}
                      onSelect={() => toggleOption(value)}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${
                          isSelected ? "opacity-100" : "opacity-0"
                        }`}
                      />

                      {formatLabel(option)}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className="w-full justify-between font-normal"
            >
              <span className="truncate">{buttonLabel}</span>

              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </DrawerTrigger>

          <DrawerContent>
            <div className="p-4">
              <Command>
                <CommandInput
                  placeholder={`Search ${label.toLowerCase()}...`}
                />

                <CommandEmpty>No {label.toLowerCase()} found.</CommandEmpty>

                <CommandGroup className="max-h-[50vh] overflow-y-auto">
                  <CommandItem value="all" onSelect={clearFilter}>
                    <Check
                      className={`mr-2 h-4 w-4 ${
                        selected.length === 0 ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {t("all")}
                  </CommandItem>

                  {options.map((option) => {
                    const value = option.toLowerCase();
                    const isSelected = selected.includes(value);

                    return (
                      <CommandItem
                        key={value}
                        value={value}
                        onSelect={() => toggleOption(value)}
                      >
                        <Check
                          className={`mr-2 h-4 w-4 ${
                            isSelected ? "opacity-100" : "opacity-0"
                          }`}
                        />

                        {formatLabel(option)}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </Command>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
