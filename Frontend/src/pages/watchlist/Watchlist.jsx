import React, { useContext } from "react";
import { ToggleContext } from "../../App";
import WatchlistCard from '../../components/watchlist/WatchlistCard';
import Movies from '../../components/watchlist/WatchlistData';
import style from "../../components/watchlist/watchlist.module.css"

const Watchlist = () => {
  const toggle = useContext(ToggleContext);

  return (
    <div className={`${style._main} bg-dark pb-0 ${toggle ? `${style._main_resize}` : `${style._main}`}`}>
      <div className={`m-2 mb-0 p-4 row row-cols-1 row-cols-md-4 g-4 gap-y-8 bg-backgroundTwo rounded-top`}>
        {Movies.map((movies)=>(
              <div key={movies.index}>
                <WatchlistCard 
                image={movies.image} 
                title={movies.title} 
                year={movies.year} 
                duration={movies.duration}/>
              </div>
        ))}
      </div>
</div>
  );
};

export default Watchlist;