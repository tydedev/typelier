import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function ArticleImage({ src, alt }: Props) {
  return (
    <figure className="my-10">
      <Image
        src={src}
        alt={alt}
        className="w-full rounded-lg"
        width={800}
        height={400}
      />
    </figure>
  );
}
