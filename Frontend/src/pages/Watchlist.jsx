import React from 'react'
import inception from "./img/Inception.png"
import joker from "./img/Joker.png"
import now from "./img/now.png"
import gatsby from "./img/gatsby.png"
import wolf from "./img/wolf.png"
import shuttler from "./img/shuttler.png"
import image from "./img/Image.jpg"
import WatchlistCard from '../components/dashboard/WatchlistCard'


const Watchlist = () => {
  return (
    <>
<div className="row row-cols-2 row-cols-md-4 g-4">
 <WatchlistCard image={inception} title="Inception" year={2010} duration={148}/>
 <WatchlistCard image={joker} title="Joker" year={2019} duration={122}/>
 <WatchlistCard image={now} title="Now you see me" year={2013} duration={115}/>
 <WatchlistCard image={image} title="The Revenant" year={2015} duration={156}/>
 <WatchlistCard image={shuttler} title="Shutter Island" year={2008} duration={107}/>
 <WatchlistCard image={gatsby} title="The Great Gatsby" year={2013} duration={183}/>
 <WatchlistCard image={wolf} title="The Wolf of Wall Street" year={2013} duration={180}/>
 <WatchlistCard image={joker} title="Joker" year={2019} duration={122}/>

</div>

</>
   
  )
}

export default Watchlist