import { useFormatter } from "next-intl";

type Props = {
  date: string;
};

export default function FormatDate({ date }: Props) {
  const format = useFormatter();

  return (
    <span>
      {format.dateTime(new Date(date), {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </span>
  );
}
