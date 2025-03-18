"use client";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import { useState } from "react";
import { InstantSearch, SearchBox, Hits, Highlight } from "react-instantsearch";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_KEY as string
);

function Hit({ hit }: { hit: { name: string; description: string } }) {
  return (
    <article>
      {/* <img src={hit?.image} alt={hit?.name} /> */}
      {/* <p>{hit?.categories[0] || ""}</p> */}
      <h1>
        <Highlight attribute={"name"} hit={hit} />
      </h1>
      <p>{hit?.description}</p>
    </article>
  );
}

function Searchbox() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName="dev_binary">
        <SearchBox
          placeholder="Search for a query"
          classNames={{
            root: "w-full",
            form: "border border-gray-300 p-2 rounded-md flex items-center",
            input: "w-full bg-transparent outline-none",
            // submitIcon: "hidden",
          }}
          onChangeCapture={(e) => setQuery(e.target.value)}
        />
        {query.length > 0 && <Hits hitComponent={Hit} />}
      </InstantSearch>
    </div>
  );
}

export default Searchbox;
