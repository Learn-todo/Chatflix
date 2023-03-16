import React from "react";
import WatchlistCard from '../../components/dashboard/watchlist/WatchlistCard'
import Movies from '../../components/dashboard/watchlist/WatchlistData'


const Watchlist = () => {
  return (
    <>
<div className="p-4 row row-cols-2 row-cols-md-4 g-4 bg-backgroundTwo rounded-top">
  {Movies.map((movies)=>(
        <div key={movies.index}><WatchlistCard image={movies.image} title={movies.title} year={movies.year} duration={movies.duration}/></div>
  ))}
</div>

</>
   
  )
}

export default Watchlist