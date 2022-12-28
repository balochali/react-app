import React, { useState, useEffect } from "react";
import { MeiliSearch } from "meilisearch";

const SearchFunctionality = (props) => {

  const client = new MeiliSearch({
    host: "http://127.0.0.1:7700",
    apiKey: "MASTER_KEY",
  });

  const [movies, setMovies] = useState([]);

  const search = props.searchData;


  
  useEffect(() => {
      client
        .index(props.indexName)
        .search(search, { limit: props.query, offset: 0 })
        .then((results) => {
          setMovies(results.hits);
        });
    }, [search]);

  return (
    <div className="movies">
      <br />
      {search !== "" ? (
        movies?.map((movie) => (
          <div className="card">
            <img src={movie.webImg} id="imageID" alt="" className="image" />
            <div className="textData">
              <h3>{movie.webTitle}</h3>
              <p>{movie.webURL}</p>
              <p>{movie.webDesc}</p>
            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SearchFunctionality;
