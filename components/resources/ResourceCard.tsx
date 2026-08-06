import Link from "next/link";

type ResourceCardProps = {
  resource: {
    slug: string;
    metadata: {
      title: string;
      description: string;
      category: string;
      image?: string;
      date?: string;
      readingTime?: string;
    };
  };
};

export default function ResourceCard({ resource }: ResourceCardProps) {
  const { metadata } = resource;

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-xl
        border
        border-neutral-200
        bg-white
        transition
        hover:-translate-y-1
      "
    >
      {metadata.image && (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={metadata.image}
            alt={metadata.title}
            className="
              h-full
              w-full
              object-cover
              transition
              duration-500
              group-hover:scale-105
            "
          />
        </div>
      )}

      <div className="p-6">
        <p
          className="
            mb-3
            text-xs
            uppercase
            tracking-[0.2em]
            text-neutral-500
          "
        >
          {metadata.category}
        </p>

        <h2
          className="
            font-serif
            text-2xl
            leading-tight
            text-neutral-900
          "
        >
          {metadata.title}
        </h2>

        <p
          className="
            mt-4
            leading-relaxed
            text-neutral-600
          "
        >
          {metadata.description}
        </p>

        <div
          className="
            mt-6
            flex
            gap-4
            text-sm
            text-neutral-500
          "
        >
          {metadata.date && <span>{metadata.date}</span>}
          {metadata.readingTime && <span>{metadata.readingTime}</span>}
        </div>

        <Link
          href={`/resources/${resource.slug}`}
          className="
            mt-6
            inline-block
            text-sm
            font-medium
            text-neutral-900
          "
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}
