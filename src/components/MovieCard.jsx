export default function MovieCard ({details, loading}){
  
  return(
    <div className="flex justify-center pb-10">
      {(details?.length > 0)? (
        <div className="mt-20 max-w-[72rem] mx-auto flex justify-center items-center flex-wrap gap-5">
          {details && details.map((movie) => (
            <div key={movie.imdbID}>
              <div className="group w-48 h-64 rounded-lg border-2 cursor-pointer relative overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="bg-emerald-500 w-10 h-10 rounded-[50%] absolute top-0 right-0 flex items-center justify-center z-10 duration-500">
                  <p className="text-sm text-white font-medium">7.5</p>
                  <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                </div>
                <div></div>
                <div className="w-full h-full bg-center bg-cover bg-no-repeat rounded-lg"
                  style={{backgroundImage: `url('${movie.Poster !== "N/A" ? movie.Poster: './src/assets/errorImg.png'}')`}}>
                  
                  <div class="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-transparent to-transparent group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/90">
                  </div>
                  <div className="absolute inset-0 rounded-lg flex translate-y-[60%] flex-col items-center justify-center  text-center transition-all duration-500 group-hover:translate-y-0">
                    <div className="text-lg italic mb-3 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <p>{movie.Title}</p>
                      <p>Year: {movie.Year}</p>
                      <p>Type: {movie.Type}</p>
                    </div>
                    <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-neutral-700">See More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>):
        (
        <div className="text-white font-mono text-3xl mt-10">
          No Movies Found...
        </div>
        )}
    </div>
  )
}