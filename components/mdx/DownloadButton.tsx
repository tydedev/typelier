import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "../ui/button";

type DownloadButtonProps = {
  href: string;
  children: ReactNode;
};

export default function DownloadButton({
  href,
  children,
}: DownloadButtonProps) {
  return (
    <div className="flex items-center justify-center py-10">
      <Button
        asChild
        rel="noopener noreferrer"
        size="default"
        className="no-underline font-normal font-body p-6"
      >
        <Link href={href} target="_blank">
          {children}
        </Link>
      </Button>
    </div>
  );
}
