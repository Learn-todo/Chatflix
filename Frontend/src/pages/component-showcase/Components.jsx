import "../../index.css";
import React from "react";
import {
	Button,
	SocialLogin,
	Input,
	ForgotPasswordForm,
	CreateAccountButtons,
	LoginForm,
	ActivityIcon,
	ChatsIcon,
	CommunityIcon,
	DownloadsIcon,
	HomeIcon,
	ProfileIcon,
	SettingsIcon,
	TopRatedIcon,
	UpcomingMoviesIcon,
	WatchHistoryIcon,
	WatchListIcon,
} from "../../components";

const IconList = [
	ActivityIcon,
	ChatsIcon,
	CommunityIcon,
	DownloadsIcon,
	HomeIcon,
	ProfileIcon,
	SettingsIcon,
	TopRatedIcon,
	UpcomingMoviesIcon,
	WatchHistoryIcon,
	WatchListIcon,
];

function ComponentShowcase() {
	return (
		<div
			className={`w-full flex flex-col items-center p-8 gap-4 bg-white-700`}
		>
			<Button text={`Primary Button`} type={`primary`} size={`big`} />
			<Button text={`Secondary Button`} type={`secondary`} size={`big`} />
			<Button text={`Sign up`} type={`primary`} size={`small`} />
			<Button text={`Log in`} type={`secondary`} size={`small`} />
			<SocialLogin icon={`google`} text={`Sign up with Google`} />
			<SocialLogin icon={`apple`} text={`Sign up with Apple`} />
			<SocialLogin icon={`email`} text={`Sign up with Email`} />
			<div className="flex flex-col gap-4 items-center w-full bg-black-600 max-w-lg p-8">
				<Input
					type={`text`}
					name={`full-name`}
					placeholder={`Full Name`}
				/>
				<Input
					type={`text`}
					name={`username`}
					placeholder={`username`}
				/>
				<Input type={`email`} name={`email`} placeholder={`Email`} />
				<Input
					type={`password`}
					name={`password`}
					placeholder={`Password`}
				/>
			</div>
			<div className="flex flex-col gap-4 items-center w-full bg-black-600 max-w-lg p-8">
				<p className="text-white">Create Account Buttons</p>
				<CreateAccountButtons />
			</div>
			<div className="flex flex-col gap-4 items-center w-full bg-black-600 max-w-lg p-8">
				<p className="text-white">Log in Form</p>
				<LoginForm />
			</div>
			<div className="flex flex-col gap-4 items-center w-full bg-black-600 max-w-lg p-8">
				<p className="text-white">Forgot Password Form</p>
				<ForgotPasswordForm />
			</div>
			<div className="flex flex-col gap-4 w-full bg-black-600 max-w-lg p-8">
				<p className="text-white text-center">NavBar Icons</p>
				<div className="flex flex-wrap gap-7">
					{IconList.map((icon) => {
						return (
							<div className="flex gap-4 border rounded p-2">
								{icon({ type: "fill" })}
								{icon({ type: "outline" })}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default ComponentShowcase;
