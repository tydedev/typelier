import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import ViewSwitcher from "./ViewSwitcher";
import { useTranslations } from "next-intl";

type Props = {
  query: string;
  setQuery: (value: string) => void;
  updateFilter: (key: string, value: string) => void;
  changeView: (columns: 1 | 2 | 3 | 4) => void;
};

export default function LibraryToolbar({
  query,
  setQuery,
  updateFilter,
  changeView,
}: Props) {
  const t = useTranslations("Library");

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="flex-1">
        <Label className="text-xs uppercase tracking-wider text-foreground/60 mb-2">
          {t("filters.search")}
        </Label>

        <Input
          placeholder={t("filters.placeholder")}
          className="bg-white/80"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            updateFilter("q", e.target.value);
          }}
        />
      </div>

      <ViewSwitcher changeView={changeView} />
    </div>
  );
}
