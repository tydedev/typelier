import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [
    { locale: "en", rest: ["404"] },
    { locale: "it", rest: ["404"] },
  ];
}

export default function CatchAllPage() {
  notFound();
}
