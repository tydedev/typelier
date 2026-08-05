import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "../ui/label";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

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

  return (
    <div>
      <Label className="text-xs uppercase tracking-wider text-foreground/60 mb-2">
        {t("filters.style")}
      </Label>

      <Select
        value={searchParams.get("category") ?? t("filters.all_styles")}
        onValueChange={(value) => updateFilter("category", value as string)}
        modal={false}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Font style" className="capitalize" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">{t("filters.all_styles")}</SelectItem>

          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              <span className="capitalize">{category}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
