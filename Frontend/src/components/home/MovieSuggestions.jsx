import React from "react";
import MovieData from "./MovieData";

const MovieSuggestions = () => {
	return (
		<section>
			<div className="mt-5">
				<h3 className="container">You May also Like</h3>
			</div>

			<div className="mt-5">
				<div className={`container`}>
					<div className="row mb-5">
						{MovieData.map((movie, i) => {
							return (
								<div className={`col mb-4`} key={movie.id}>
									<div className={`p-4 text-start rounded-1`}>
										<img src={`${movie.img}`} className={``} alt="" />
										<div className={` p-0 py-1`}>
											<h5 className={`py-2 fs-5`}>{movie.title}</h5>
											<span className="card-text">{movie.duration}</span>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default MovieSuggestions;
