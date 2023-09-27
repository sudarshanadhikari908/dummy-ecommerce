import { useState, useEffect } from "react";

function useDebouncedSearch(searchQuery: string) {
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);

  return { debouncedQuery };
}

export default useDebouncedSearch;
