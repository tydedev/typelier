import { Resource } from "@/lib/resources";
import ResourceCard from "./ResourceCard";

type Props = {
  resources: Resource[];
};

export default function ResourceGrid({ resources }: Props) {
  return (
    <section>
      <h2
        className="
          mb-10
          font-serif
          text-3xl
        "
      >
        Latest Resources
      </h2>

      <div
        className="
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {resources.map((resource) => (
          <ResourceCard key={resource.slug} resource={resource} />
        ))}
      </div>
    </section>
  );
}
