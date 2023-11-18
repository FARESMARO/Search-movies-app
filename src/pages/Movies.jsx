import React from "react";
import ActionAreaCard from "../components/Card";
import UseFetch from "../Hooks/UseFetch";
import { useSearchParams } from "react-router-dom";
import "../Style/style.css";

export default function Movies() {
  let [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies, error } = UseFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=05954ce013db039af9150e8e6e66f260&query=${queryTerm}`
    // &query=${queryTerm}
  );
  return (
    <main>
      {movies != "" ? <h2>result is :{queryTerm}</h2> : <h2> undefined</h2>}
      <div className="Card">
        {error ? (
          <p>error 404</p>
        ) : (
          movies.map((movie) => {
            return <ActionAreaCard key={movie.id} movie={movie} />;
          })
        )}
      </div>
    </main>
  );
}
