import { Columns2, Columns3, Columns4, Square } from "lucide-react";

import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

type Props = {
  changeView: (columns: 1 | 2 | 3 | 4) => void;
};

export default function ViewSwitcher({ changeView }: Props) {
  const t = useTranslations("Library");

  return (
    <div className="hidden md:flex items-center gap-2">
      <span className="text-xs uppercase tracking-wider text-foreground/60 mr-2">
        {t("filters.view")}
      </span>

      <Button variant="outline" size="icon" onClick={() => changeView(1)}>
        <Square className="w-4 h-4" />
      </Button>

      <Button variant="outline" size="icon" onClick={() => changeView(2)}>
        <Columns2 className="w-4 h-4" />
      </Button>

      <Button variant="outline" size="icon" onClick={() => changeView(3)}>
        <Columns3 className="w-4 h-4" />
      </Button>

      <Button variant="outline" size="icon" onClick={() => changeView(4)}>
        <Columns4 className="w-4 h-4" />
      </Button>
    </div>
  );
}
