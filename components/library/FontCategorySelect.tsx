"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "../ui/button";
import { Label } from "../ui/label";

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

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

type Props = {
  categories: string[];
  updateFilter: (key: string, value: string) => void;
};

export default function FontCategorySelect({
  categories,
  updateFilter,
}: Props) {
  const t = useTranslations("Library");
  const searchParams = useSearchParams();
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const selected = searchParams.get("fontCategory");

  const formatLabel = (value: string) =>
    value.replace(/\b\w/g, (char) => char.toUpperCase());

  const selectCategory = (value: string) => {
    updateFilter("fontCategory", value);
    setDrawerOpen(false);
    setPopoverOpen(false);
  };

  const content = (
    <Command>
      <CommandInput placeholder="Search style..." />

      <CommandEmpty>No style found.</CommandEmpty>

      <CommandGroup className="max-h-[300px] overflow-y-auto">
        <CommandItem value="all" onSelect={() => selectCategory("all")}>
          {t("filters.all_styles")}
        </CommandItem>

        {categories.map((category) => (
          <CommandItem
            key={category}
            value={category}
            onSelect={() => selectCategory(category)}
          >
            <Check
              className={`mr-2 h-4 w-4 ${
                selected === category ? "opacity-100" : "opacity-0"
              }`}
            />

            {formatLabel(category)}
          </CommandItem>
        ))}
      </CommandGroup>
    </Command>
  );

  return (
    <div>
      <Label className="mb-2 text-xs uppercase tracking-wider text-foreground/60">
        {t("filters.style")}
      </Label>

      {/* Desktop */}
      <div className="hidden md:block">
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className="w-full justify-between font-normal capitalize"
            >
              {selected ? formatLabel(selected) : t("filters.all_styles")}

              <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            className="w-[--radix-popover-trigger-width] p-0"
            side="bottom"
            align="start"
          >
            {content}
          </PopoverContent>
        </Popover>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className="w-full justify-between font-normal capitalize"
            >
              {selected ? formatLabel(selected) : t("filters.all_styles")}

              <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
            </Button>
          </DrawerTrigger>

          <DrawerContent>
            <div className="p-4">{content}</div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
