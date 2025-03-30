const API_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  HEADERS: { Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`, accept: 'application/json' },
};

export const fetchPopularMovies = () => {
  return fetch(`${API_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`, {
    method: 'GET',
    headers: API_CONFIG.HEADERS,
  })
    .then((response) => response.json())
    .then((json) => json.movies)
    .catch((error) => console.error(error));
};

// export const fetchMoviesByName = (name: string) => {
//   return fetch(`${API_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`)
//     .then((response) => response.json())
//     .then((json) => json.movies)
//     .catch((error) => console.error(error));
// };
