import { useState, useMemo, ReactElement } from "react";

import Button from "@/src/components/Button";
import List from "@/src/components/List";

import { Sort, Movie } from "@/src/types";

import data from "@/src/data/data";

const KEYS = Object.keys(data.movies[0]);

function App(): ReactElement {
  const [sort, setSort] = useState<Sort>({
    key: "",
    order: 0,
  });

  const sortedMovies = useMemo(() => {
    let newSortedMovies = data.movies;
    if (sort.key) {
      newSortedMovies = newSortedMovies.sort((a, b) => {
        const c = a[sort.key as keyof Movie];
        const d = b[sort.key as keyof Movie];

        if (c === d) {
          return 0;
        }
        if (c > d) {
          return sort.order ? 1 * sort.order : 1;
        }
        if (c < d) {
          return sort.order ? -1 * sort.order : -1;
        }
        return 0;
      });
    }
    return newSortedMovies;
  }, [sort]);

  const handleSort = (key: string) => {
    if (sort.key === key && sort.order) {
      setSort({ ...sort, order: -sort.order });
    } else {
      setSort({
        key,
        order: 1,
      });
    }
  };

  return (
    <div className="app">
      <header className="app_header">
        <h1>React Sort Demo</h1>
      </header>
      <div className="sort_buttons">
        <h2>Sort by</h2>
        {KEYS.map((key: string) => (
          <Button key={key} button={key} sort={sort} handleSort={handleSort} />
        ))}
      </div>
      <ul className="movie_list">
        {sortedMovies.map((movie: Movie) => (
          <List key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default App;
