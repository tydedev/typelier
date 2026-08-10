"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const tabs = ["Details", "Technical specifications"];

export default function DraftPage() {
  const [activeTab, setActiveTab] = useState(0);

  const product = {
    title: "Chapter Development Sheet",
    description:
      "A printable worksheet designed to help you develop the chapters for your novel.",
    price: 30,
    format: "PDF",
    paperSize: "A4",
    pages: 1,
    type: "Printable worksheet",
  };

  const isFree = product.price === 0;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <article className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Preview */}
        <div className="flex min-h-[420px] items-center justify-center bg-foreground/5 p-8 md:min-h-[500px]">
          <div className="flex max-h-[420px] max-w-xl items-center justify-center">
            {/* Product preview */}
          </div>
        </div>

        {/* Product information */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
            {product.type}
          </p>

          <h1 className="font-heading text-3xl leading-tight md:text-4xl">
            {product.title}
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/70">
            {product.description}
          </p>

          <div className="mt-8 flex items-center gap-6">
            <span className="text-2xl font-medium">
              {isFree ? "FREE" : `€${product.price}`}
            </span>

            <Button size="lg">{isFree ? "Download" : "Buy now"}</Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="col-span-full mt-4">
          <Separator />

          <div className="mt-6 flex items-center gap-2">
            {tabs.map((tabName, index) => (
              <Button
                key={tabName}
                variant={index === activeTab ? "default" : "ghost"}
                onClick={() => setActiveTab(index)}
              >
                {tabName}
              </Button>
            ))}
          </div>

          {/* Tab content */}
          <div className="mt-8 max-w-3xl">
            {activeTab === 0 && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl">About this resource</h2>

                  <p className="mt-3 leading-relaxed text-foreground/70">
                    The Chapter Development Sheet is a simple printable
                    worksheet designed to help you plan and develop the chapters
                    of your novel.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl">What’s included</h2>

                  <ul className="mt-3 list-disc space-y-2 pl-5 text-foreground/70">
                    <li>Chapter overview</li>
                    <li>Character goals</li>
                    <li>Conflict and obstacles</li>
                    <li>Before and after notes</li>
                    <li>Space for additional notes</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl">Who is it for?</h2>

                  <p className="mt-3 leading-relaxed text-foreground/70">
                    Designed for novelists, aspiring writers, and anyone working
                    on a fiction project who wants a simple way to organize
                    their chapters.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div>
                <h2 className="font-heading text-2xl">
                  Technical specifications
                </h2>

                <dl className="mt-6 divide-y divide-foreground/10 border-y border-foreground/10">
                  <div className="flex justify-between gap-6 py-4">
                    <dt className="text-foreground/50">Format</dt>
                    <dd className="font-medium">{product.format}</dd>
                  </div>

                  <div className="flex justify-between gap-6 py-4">
                    <dt className="text-foreground/50">Size</dt>
                    <dd className="font-medium">{product.paperSize}</dd>
                  </div>

                  <div className="flex justify-between gap-6 py-4">
                    <dt className="text-foreground/50">Pages</dt>
                    <dd className="font-medium">{product.pages}</dd>
                  </div>

                  <div className="flex justify-between gap-6 py-4">
                    <dt className="text-foreground/50">Type</dt>
                    <dd className="font-medium">{product.type}</dd>
                  </div>

                  <div className="flex justify-between gap-6 py-4">
                    <dt className="text-foreground/50">Printing</dt>
                    <dd className="font-medium">Print at home</dd>
                  </div>
                </dl>
              </div>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}
