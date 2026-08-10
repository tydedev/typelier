import { Suspense } from "react";
import Heading from "@/components/global/Heading";
import ResourcesContent from "@/components/resources/ResourcesContent";
import { getContents } from "@/lib/content";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Resources({ params }: Props) {
  const { locale } = await params;

  const resources = getContents("resources", locale);
  const shopItems = getContents("shop", locale);

  return (
    <>
      <Heading>Resources</Heading>

      <Suspense fallback={null}>
        <ResourcesContent resources={resources} shopItems={shopItems} />
      </Suspense>
    </>
  );
}
