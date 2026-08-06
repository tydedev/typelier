import Heading from "@/components/global/Heading";
import FeaturedResource from "@/components/resources/FeaturedResource";
import ResourceGrid from "@/components/resources/ResourceGrid";
import { getResources } from "@/lib/resources";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Resources({ params }: Props) {
  const { locale } = await params;

  const resources = getResources(locale);

  const featured = resources.find((resource) => resource!.metadata.featured);

  const latest = resources.filter(
    (resource) => resource!.slug !== featured?.slug,
  );

  return (
    <div>
      <Heading>Resources</Heading>

      <div className=" py-20">
        {featured && <FeaturedResource resource={featured} />}

        <div className="mt-24">
          <ResourceGrid resources={latest} />
        </div>
      </div>
    </div>
  );
}
