import Image from "next/image";
import Link from "next/link";

type FeaturedResourceProps = {
  resource: {
    slug: string;
    metadata: {
      title: string;
      description: string;
      category: string;
      image?: string;
    };
  };
};

export default function FeaturedResource({ resource }: FeaturedResourceProps) {
  const { metadata } = resource;

  return (
    <section
      className="
        grid
        gap-10
        overflow-hidden
        rounded-2xl
        bg-neutral-100
        md:grid-cols-2
        md:p-12
      "
    >
      <div className="flex flex-col justify-center">
        <p
          className="
            text-xs
            uppercase
            tracking-[0.25em]
            text-neutral-500
          "
        >
          Featured Article
        </p>

        <h1
          className="
            mt-5
            font-serif
            text-4xl
            leading-tight
            md:text-5xl
          "
        >
          {metadata.title}
        </h1>

        <p
          className="
            mt-6
            text-lg
            leading-relaxed
            text-neutral-600
          "
        >
          {metadata.description}
        </p>

        <Link
          href={`/resources/${resource.slug}`}
          className="
            mt-8
            text-sm
            font-medium
          "
        >
          Read article →
        </Link>
      </div>

      {metadata.image && (
        <div className="max-h-[400px]">
          <Image
            src={metadata.image}
            alt={metadata.title}
            height={400}
            width={600}
            className="
          "
          />
        </div>
      )}
    </section>
  );
}
