const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const baseUrl = "https://api.themoviedb.org/3"

const requests = {
	fetchTrending: `${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_networks=213`,
	fetchTopRated: `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
	fetchComedyMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
	fetchHorrorMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
	fetchRomanceMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
	fetchDocumentaries: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
}

export default requests