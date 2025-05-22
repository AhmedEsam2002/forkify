import { title } from "@/components/primitives";
import Gallery from "@/components/Gallery";
import DefaultLayout from "@/layouts/default";
import { Select, SelectItem } from "@heroui/select";
import { queries } from "@/APIs/quires";
import { useState } from "react";

export default function IndexPage() {
  const [searchQuery, setSearchQuery] = useState<string>("basil");
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Discover&nbsp;</span>
          <span className={title({ color: "violet" })}>Easy &</span>
          <br />
          <span className={title()}>Quick Recipes for Every Craving</span>
        </div>
        <Select
          className="w-full"
          label="Select Food Type"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setSearchQuery(e.target.value);
          }}
          defaultSelectedKeys={[searchQuery]}
        >
          {queries.map((query) => (
            <SelectItem key={query.key}>{query.label}</SelectItem>
          ))}
        </Select>
        <Gallery searchQuery={searchQuery} />
        {/*  Food */}
      </section>
    </DefaultLayout>
  );
}
