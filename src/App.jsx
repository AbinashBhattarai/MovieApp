import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'
import Loader from './components/Loader'

function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const url = import.meta.env.VITE_MOVIE_URL;
  const key = import.meta.env.VITE_MOVIE_API_KEY;

  const getMovies = async (title) => {
    setLoading(true);
    const res = await fetch(`${url}${key}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
    setLoading(false);
  }

  return (
    <>
      <div className='min-h-dvh bg-center bg-cover bg-no-repeat bg-gradient-to-r from-[#061161] to-[#780206]'>&#x2800;
        <div className='w-fit mt-32 mx-auto font-mono text-center'>
          <h1 className='text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-[#ca98cf]'>
            MovieWorld
          </h1>
        </div>
        <div className='max-w-[40rem] mt-4 mx-auto py-1 px-3 bg-slate-500 rounded-lg sticky top-0 z-50'>
          <input type="text" placeholder='search movies here'
            value={search}
            onChange={(e) => {setSearch(e.target.value)}}
            className='capitalize w-full outline-none text-2xl text-slate-600 py-2 pl-3 pr-24 rounded-xl' />
          <svg onClick={() => {getMovies(search)}}
            className='absolute top-[25%] right-[5%]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z">
            </path>
          </svg>
        </div>

        
        {!loading && <MovieCard details={movies} />}
        {loading && <Loader />}
      </div>
    </>
  )
}

export default App
