
import WatchlistCard from '../../components/dashboard/watchlist/WatchlistCard'
import Movies from '../../components/dashboard/watchlist/WatchlistData'


const Watchlist = () => {
  return (
    <>
<div className="row row-cols-2 row-cols-md-4 g-4">
  {Movies.map((movies)=>(
        <WatchlistCard image={movies.image} title={movies.title} year={movies.year} duration={movies.duration}/>
  ))}
</div>

</>
   
  )
}

export default Watchlist