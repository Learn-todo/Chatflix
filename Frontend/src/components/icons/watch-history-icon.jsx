const WatchHistoryIcon = ({ type }) => {
	return (
		<svg
			width="24"
			height="25"
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${type === "fill" && "fill-primary"} ${
				type === "outline" && "stroke-white"
			}`}
		>
			<path d="M12 2.76465C6.49 2.76465 2 7.25465 2 12.7646C2 18.2746 6.49 22.7646 12 22.7646C17.51 22.7646 22 18.2746 22 12.7646C22 7.25465 17.51 2.76465 12 2.76465ZM16.35 16.3346C16.21 16.5746 15.96 16.7046 15.7 16.7046C15.57 16.7046 15.44 16.6746 15.32 16.5946L12.22 14.7446C11.45 14.2846 10.88 13.2746 10.88 12.3846V8.28465C10.88 7.87465 11.22 7.53465 11.63 7.53465C12.04 7.53465 12.38 7.87465 12.38 8.28465V12.3846C12.38 12.7446 12.68 13.2746 12.99 13.4546L16.09 15.3046C16.45 15.5146 16.57 15.9746 16.35 16.3346Z" />
		</svg>
	);
};

export default WatchHistoryIcon;
