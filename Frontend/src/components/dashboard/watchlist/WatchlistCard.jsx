import React from 'react'
import {Dot} from 'react-bootstrap-icons';
import  watchlistStyles from "./watchlist.module.css"
const WatchlistCard = (props) => {
  return (
    <>
      <div className="col gap-y-8">
        <div className={`${watchlistStyles.card} card h-100`}>
          <img src={props.image}  alt="..." />
          <div className={`${watchlistStyles.card_body} card-body p-0`}>
            <h5 className={`${watchlistStyles.card_title} card-title`}>{props.title}</h5>
            <p className={`${watchlistStyles.card_text} card-text`}>
              <span>{props.year}</span>
              <Dot/>
              <span>{props.duration} min</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WatchlistCard
