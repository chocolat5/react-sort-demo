import { Movie } from "@/src/types";

interface Props {
  movie: Movie;
}

function List({ movie }: Props) {
  return (
    <li>
      <p className="list_id">
        <span>ID :</span> {movie.id}
      </p>
      <p>
        {movie.title}（{movie.year}）
      </p>
      <p className="list_cat">
        <span>Category :</span> {movie.category}
      </p>
    </li>
  );
}

export default List;
