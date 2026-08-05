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
import { useTranslations } from "next-intl";

type Props = {
  moods: string[];
  updateFilter: (key: string, value: string) => void;
};

export default function MoodCombobox({ moods, updateFilter }: Props) {
  const t = useTranslations("Library");

  const searchParams = useSearchParams();

  const formatLabel = (value: string) =>
    value.replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div>
      <Label className="text-xs uppercase tracking-wider text-foreground/60 mb-2">
        Mood
      </Label>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-full justify-between font-normal capitalize"
          >
            {searchParams.get("mood")
              ? formatLabel(searchParams.get("mood")!)
              : t("filters.all_moods")}

            <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="w-[--radix-popover-trigger-width] p-0"
          side="bottom"
          align="end"
        >
          <Command>
            <CommandInput placeholder="Search mood..." />

            <CommandEmpty>No mood found.</CommandEmpty>

            <CommandGroup className="max-h-[300px] overflow-y-auto">
              <CommandItem
                value="all"
                onSelect={() => updateFilter("mood", "all")}
              >
                {t("filters.all_moods")}
              </CommandItem>

              {moods.map((mood) => (
                <CommandItem
                  key={mood}
                  value={mood}
                  onSelect={() => updateFilter("mood", mood)}
                >
                  <Check
                    className={`mr-2 h-4 w-4 ${
                      searchParams.get("mood") === mood
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />

                  {formatLabel(mood)}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
