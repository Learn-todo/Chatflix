import React, { useState } from "react";
// import Dashboard from "../../components/dashboard/Dashboard";
import style from "./style.module.css";
import { Image } from "cloudinary-react";
import { FcLike } from "react-icons/fc";
import { CiSaveDown2 } from "react-icons/ci";
import { BsShare } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { IoStarOutline } from "react-icons/io5";
import Img from "./images/Django.png";
import MovieSuggestions from "./MovieSuggestions";
import Comments from "./Comments/Comments";

const MovieView = ({ movieName, genre }) => {
	const stars = Array(5).fill(0);

	const [currenRating, setCurrentRating] = useState(0);
	const [hoverValue, setHoverValue] = useState(undefined);

	const colors = {
		orange: "#ffba5a",
		grey: "#a9a9a9",
	};

	const handleClick = (value) => {
		setCurrentRating(value);
	};

	const handloeMouseOver = (value) => {
		setHoverValue(value);
	};

	const handleMouseLeave = () => {
		setHoverValue(undefined);
	};

	return (
		<div>
			{/* <Dashboard /> */}
			<section
				className={`${style._movieView} container-lg w-80 border-bottom border-menu-heading`}>
				<Image
					className="w-100"
					cloudName="dfsclcxhm"
					publicId="Chatflix/features_rpmzvb.png"
				/>

				<div
					className={`d-flex justify-content-between align-items-center gap-2 mt-3`}>
					<div
						className={`d-flex justify-content-start align-items-center gap-2 gap-lg-4 mt-3`}>
						<div
							className={` d-flex justify-content-start align-items-center gap-2`}>
							<FcLike className={`${style._movieIcons}`} />
							<span>like</span>
						</div>
						<div
							className={`d-flex justify-content-start align-items-center gap-2`}>
							<CiSaveDown2 className={`${style._movieIcons}`} />
							<span>save</span>
						</div>
						<div
							className={`d-flex justify-content-start align-items-center gap-2`}>
							<BsShare className={`${style._movieIcons}`} />
							<span>share</span>
						</div>
						<div
							className={`d-flex justify-content-start align-items-center gap-2`}>
							<FiDownload className={`${style._movieIcons}`} />
							<span>Download</span>
						</div>
					</div>
					<div
						className={`mt-2 d-flex justify-content-center align-items-center`}>
						{stars.map((_, index) => (
							<IoStarOutline
								key={index}
								style={{ cursor: "pointer" }}
								color={
									(hoverValue || currenRating) > index
										? colors.orange
										: colors.grey
								}
								onClick={() => handleClick(index + 1)}
								onMouseOver={() => handloeMouseOver(index + 1)}
								onMouseLeave={() => handleMouseLeave()}
							/>
						))}
					</div>
				</div>
				<div className={`${style._sideline} mt-3`}></div>
			</section>

			<section className={`container-lg mt-5 `}>
				{/* <Image
					className={style._movieImg}
					cloudName="dfsclcxhm"
					publicId="Chatflix/features_rpmzvb.png"
				/> */}
				<img src={Img} alt="" srcset="" />
				<div>
					<h2>Django Unchained</h2>

					<div className={`${style._movieGenre}`}>
						<button> Drama {genre}</button>
						<button>Western {movieName}</button>
					</div>
				</div>

				<div
					className={`${style._movieRating} d-flex justify-content-start gap-4`}>
					<IoStarOutline />
					<span>8/10</span> <span>1.5 M</span>
				</div>
				<article>
					Two years before the Civil War pits brother-against-brother,
					German-born bounty-hunter Dr. King Schultz (Academy Award-winner
					Christoph Waltz) arrives in America determined to capture the outlaw
					Brittle brothers dead or alive. In the midst of his search, Dr.
					Schultz crosses paths
				</article>
				<div className={`d-flex flex-column mt-3 gap-3`}>
					<span>Country: </span>
					<span>Release: </span>
					<span>Director: </span>
					<span>Production: </span>
					<span>Cast: </span>
				</div>
			</section>

			<section className={`container-lg border-top border-menu-heading mt-4 `}>
			
				<Comments currentUserId="1" />
			</section>

			<MovieSuggestions />
		</div>
	);
};

export default MovieView;
