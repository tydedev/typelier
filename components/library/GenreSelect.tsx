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
  genres: string[];
  updateFilter: (key: string, value: string) => void;
};

export default function GenreSelect({ genres, updateFilter }: Props) {
  const t = useTranslations("Library");
  const searchParams = useSearchParams();

  return (
    <div>
      <Label className="text-xs uppercase tracking-wider text-foreground/60 mb-2">
        {t("filters.genre")}
      </Label>

      <Select
        value={searchParams.get("genre") ?? t("filters.all_genres")}
        onValueChange={(value) => updateFilter("genre", value as string)}
        modal={false}
      >
        <SelectTrigger className="w-full">
          <SelectValue
            placeholder={t("filters.genre")}
            className="capitalize"
          />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">{t("filters.all_genres")}</SelectItem>

          {genres.map((genre) => (
            <SelectItem key={genre} value={genre}>
              <span className="capitalize">{genre}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
