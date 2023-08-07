import Fuse from "fuse.js";
import Card from "./Card";
import { useEffect, useRef, useState } from "react";

type SearchItem = {
  title: string;
  description: string;
  headings: string[];
  frontmatter: Frontmatter;
};

interface Props {
  searchList: SearchItem[];
}

interface SearchResult {
  item: SearchItem;
  refIndex: number;
}

export default function SearchBar({ searchList }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
    null
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
  };

  const fuse = new Fuse(searchList, {
    keys: ["title", "description", "headings", "tags"],
    includeMatches: true,
    includeScore: true,
    minMatchCharLength: 2,
    threshold: 0.4,
  });

  useEffect(() => {
    // if URL has search query,
    // insert that search query in input field
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr) setInputVal(searchStr);

    // put focus cursor at the end of the string
    setTimeout(function () {
      inputRef.current!.selectionStart = inputRef.current!.selectionEnd =
        searchStr?.length || 0;
    }, 50);
  }, []);

  useEffect(() => {
    // Add search result only if
    // input value is more than one character
    let inputResult = inputVal.length > 1 ? fuse.search(inputVal) : [];
    setSearchResults(inputResult);

    // Update search string in URL
    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", inputVal);
      const newRelativePathQuery =
        window.location.pathname + "?" + searchParams.toString();
      history.pushState(null, "", newRelativePathQuery);
    } else {
      history.pushState(null, "", window.location.pathname);
    }
  }, [inputVal]);


  var c;
  if(inputVal.length > 0 && searchResults) {
    // console.log(searchResults.map(( item ) => item.matches[0]).map(( item ) => [item.key, item.value, item]))
    // console.log(searchResults.map(( item ) => item.score))
    c = searchResults.map(({ item, refIndex }) => (
        <Card key={item.frontmatter.url} title={item.frontmatter.title} datetime={item.frontmatter.datetime} url={item.url}/>
    ))
  } else {
    // c = <div></div>
    c = searchList.map(( item ) => (
        // console.log(item)
        <Card key={item.frontmatter.url} title={item.frontmatter.title} datetime={item.frontmatter.datetime} url={item.url}/>
    ))
  }

  return (
    <>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input
          className="placeholder:italic placeholder:text-opacity-75 py-3 pl-10 pr-3
        block bg-skin-fill w-full rounded
        border border-skin-fill border-opacity-40
        focus:outline-none focus:border-skin-accent"
          placeholder="Search for anything..."
          type="text"
          name="search"
          defaultValue={inputVal}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          ref={inputRef}
        />
      </label>
      <h3 className="text-xl font-bold pb-2 pt-5">Collection</h3>

      {inputVal.length > 1 && (
        <div className="mt-8 mb-2">
          Found {searchResults?.length}
          {searchResults?.length && searchResults?.length > 1
            ? " results"
            : " result"}{" "}
          for '{inputVal}'
        </div>
      )}

      <table>
        {c}
      </table>
    </>
  );
}
