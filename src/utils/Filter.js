export const filterMovies = (searchQuery, moviesArray) => {
    return moviesArray.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };