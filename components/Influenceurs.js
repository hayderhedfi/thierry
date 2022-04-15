import Image from "next/image";
import { useState } from "react";
import insta_logo from "../public/insta_rose.svg";
import tiktok_logo from "../public/tiktok_rose.svg";
import twitter_logo from "../public/twitter_rose.svg";
import discord_logo from "../public/discord_rose.svg";
import jules from "../public/JulesVoxel.png";
import paola from "../public/PaolaVoxel.png";
import sullivan from "../public/SullivanVoxel.png";
import clara from "../public/ClaraVoxel.png";
import zeus from "../public/ZeusVoxel.png";

import arrow_left from "../public/arrow-left.png";
import arrow_right from "../public/arrow-right.png";
import { Tooltip } from "./Tooltip";
import { useRouter } from "next/router";
import { Disclosure, Transition } from "@headlessui/react";
import { Fragment } from "react/cjs/react.production.min";

export const Influenceurs = () => {
	const Influenceurs_Data = [
		{
			name: "Sundy Jules",
			img: jules,
			medias: [
				{
					name: "instagram",
					src: insta_logo,
					url: "https://www.instagram.com/sundyjules",
				},
				{
					name: "tiktok",
					src: tiktok_logo,
					url: "https://www.tiktok.com/@sundyjules?lang=fr",
				},
				{
					name: "twitter",
					src: twitter_logo,
					url: "https://twitter.com/SundyJules",
				},
			],
			collections: getAllimg("jules"),
		},
		{
			name: "Paola",
			img: paola,
			medias: [
				{
					name: "instagram",
					src: insta_logo,
					url: "https://www.instagram.com/paolalct",
				},
				{
					name: "tiktok",
					src: tiktok_logo,
					url: "https://www.tiktok.com/@paolalct?lang=fr",
				},
			],
			collections: getAllimg("paola"),
		},
		{
			name: "Sullivan",
			img: sullivan,
			medias: [
				{
					name: "instagram",
					src: insta_logo,
					url: "https://www.instagram.com/sulivangwed",
				},
				{
					name: "tiktok",
					src: tiktok_logo,
					url: "https://www.tiktok.com/@sulivangwed?lang=fr",
				},
				{
					name: "twitter",
					src: twitter_logo,
					url: "https://twitter.com/sulivangwed",
				},
			],
			collections: getAllimg("sullivan"),
		},
		{
			name: "Clara",
			img: clara,
			medias: [
				{
					name: "instagram",
					src: insta_logo,
					url: "https://www.instagram.com/claramarz",
				},
				{
					name: "tiktok",
					src: tiktok_logo,
					url: "https://www.tiktok.com/@claramarz?lang=fr",
				},
				{
					name: "twitter",
					src: twitter_logo,
					url: "https://twitter.com/claramarz",
				},
			],
			collections: getAllimg("clara"),
		},
		{
			name: "Mr. N7",
			img: zeus,
			medias: [
				{
					name: "instagram",
					src: insta_logo,
					url: "https://www.instagram.com/neftyseven/",
				},
				{
					name: "twitter",
					src: twitter_logo,
					url: "https://twitter.com/nefty_seven",
				},
				{
					name: "discord",
					src: discord_logo,
					url: "https://discord.gg/hEfs9CUfRu",
				},
			],
			collections: getAllimg("zeus"),
		},
	];

	const textContent = {
		"en-US": {
			title: "Our",
			title2: "Artists",
			tocome: "Collection to come",
			content: [
				{
					presentation:
						"The mural above hides the very first NFT artistically created for the launch of the N7 project. It is composed of 7.777 mini NFTs which, as they are minted, will reveal a unique NFT image. Get lucky! Through a random draw you could win an NFTs from one of the following categories :",
				},
			],
		},
		"fr-FR": {
			title: "Nos",
			title2: "Artistes",
			tocome: "Collection à venir",
			content: [
				{
					presentation:
						"La fresque présentée ci-dessus cache le premier NFT réalisé pour le lancemet du projet N7. Elle est constituée de 7.777 NFTs qui au fur et à mesure de leur création, laisseront place au NFT original. Tente ta chance pour obtenir, à travers un tirage aléatoire, l’un des NFT d’une des catégories suivantes : ",
				},
			],
		},
	};

	const [idx, setIdx] = useState(0);

	const { locale, locales, defaultLocale, asPath } = useRouter();
	const { title, title2, tocome, content } = textContent[locale];
	return (
		<>
			<div
				className="influenceurs-bloc text-white flex flex-wrap justify-center mb-7"
				id="artist">
				<div className="influenceurs-bg"></div>
				<div className="w-full">
					<h1 className="text-left hero-title relative uppercase w-full mt-10">
						{title} <span>{title2}</span>{" "}
					</h1>
					<div className="flex flex-wrap justify-between relative w-full">
						<Inf_BlocName
							idx={idx}
							setIdx={setIdx}
							influencers={Influenceurs_Data}
						/>
					</div>
					<Bloc_Avatar
						idx={idx}
						setIdx={setIdx}
						influencers={Influenceurs_Data}
					/>
				</div>
			</div>
			<hr className="hr-hero mb-20" />
			<div className="lg:container w-full flex-shrink-0 flex flex-wrap text-left text-white pb-8">
				<h2 className="font-bold text-2xl md:text-3xl 2xl:text-4xl w-full px-4">
					777 <span className="pink">NEFTYS</span> : {tocome}
				</h2>
				<div className="hidden md:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-4 justify-items-center w-full">
					{Influenceurs_Data[idx].collections.map((img, i) => {
						return (
							<Tooltip key={i} name={`${Influenceurs_Data[idx].name}`}>
								<div className="w-full nft-piece">
									<Image src={img} alt="img nft" width="300" height="300" />
								</div>
							</Tooltip>
						);
					})}
				</div>
				<div className="grid md:hidden grid-cols-1 gap-4 justify-items-center w-full">
					{Influenceurs_Data[idx].collections.slice(0, 3).map((img, i) => {
						return (
							<Tooltip key={i} name={`${Influenceurs_Data[idx].name}`}>
								<div className="w-full">
									<Image src={img} alt="img nft" width="300" height="300" />
								</div>
							</Tooltip>
						);
					})}
					<Disclosure>
						{({ open }) => (
							<Fragment>
								<Transition
									as={Fragment}
									enter="transition duration-100 ease-out"
									enterFrom="transform scale-95 opacity-0"
									enterTo="transform scale-100 opacity-100"
									leave="transition duration-75 ease-out"
									leaveFrom="transform scale-100 opacity-100"
									leaveTo="transform scale-95 opacity-0">
									<Disclosure.Panel
										className={
											"grid md:hidden grid-cols-1 gap-4 justify-items-center w-full"
										}>
										{Influenceurs_Data[idx].collections
											.slice(3)
											.map((img, i) => {
												return (
													<Tooltip
														key={i}
														name={`${Influenceurs_Data[idx].name}`}>
														<div className="w-full">
															<Image
																src={img}
																alt="img nft"
																width="300"
																height="300"
															/>
														</div>
													</Tooltip>
												);
											})}
									</Disclosure.Panel>
								</Transition>
								{!open && (
									<Disclosure.Button
										className={"btn py-2 px-5 pink-linear w-160px"}>
										See more
									</Disclosure.Button>
								)}
							</Fragment>
						)}
					</Disclosure>
				</div>
			</div>
		</>
	);
};

export const Inf_BlocName = ({ name = "", idx, setIdx, influencers }) => {
	const maxLn = influencers.length - 1;

	const turn_left = () =>
		idx > 0 ? setIdx(Math.max(0, idx - 1)) : setIdx(maxLn);
	const turn_right = () => (idx < maxLn ? setIdx(idx + 1) : setIdx(0));

	return (
		<div className="bloc-name w-full mt-1">
			<div className="flex justify-center -mb-12">
				{influencers.map((inf, i) => (
					<div
						key={i}
						onClick={() => setIdx(i)}
						className={idx == i ? "boule-full" : "boule"}></div>
				))}
			</div>

			<div className="inf-name-title mx-10 md:mx-20 py-4">
				<div className="flex h-40 items-center justify-between max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto ">
					<div className="relative w-1/5 lg:w-1/12">
						<Image
							onClick={turn_left}
							src={arrow_left}
							width="25"
							height="25"
							className="cursor-pointer"
						/>
					</div>
					<div className="mx-5 fs-30 w-3/5 lg:w-10/12 semi-bold">
						{influencers && influencers[idx] ? influencers[idx].name : name}
					</div>
					<div className="relative w-1/5 lg:w-1/12">
						<Image
							onClick={turn_right}
							src={arrow_right}
							width="25"
							height="25"
							className="cursor-pointer"
						/>
					</div>
				</div>
			</div>
			<div className="flex justify-center right-side-bloc-name -mt-12">
				{influencers && influencers[idx]
					? influencers[idx].medias.map((media, i) => {
							return (
								<a
									key={i}
									href={media.url}
									target="_blank"
									rel="noopener noreferrer"
									className="cursor-pointer">
									<Image
										src={media.src}
										alt={media.name}
										className="grow"
										width={50}
										height={30}
									/>
								</a>
							);
					  })
					: null}
			</div>
		</div>
	);
};

const Bloc_Avatar = ({ idx, influencers }) => {
	const maxLn = influencers.length - 1;
	if (influencers[idx] && influencers[idx].img) {
		return (
			<div className="h-1/2">
				<div className="flex flex-col lg:flex-row h-full items-center justify-center lg:mx-10 relative">
					<div className="hidden absolute lg:block mx-5 fade-in-image  transform transition-all duration-200 ease-linear translate-x-[calc(100%+80px)] xl:translate-x-[calc(100%+160px)] bottom-48">
						<div className="relative w-64 h-64 lg:w-72 lg:h-72">
							<Image
								src={
									influencers[idx] && idx > 0
										? influencers[idx - 1].img.src
										: influencers[maxLn].img.src
								}
								alt="left logo"
								objectFit="cover"
								layout="fill"
							/>
						</div>
					</div>
					<div className="hidden absolute lg:block lg:w-1/2 transform transition-all duration-200 ease-linear translate-x-[calc(50%-250px)]">
						<div className="relative h-[500px] w-[500px]">
							<Image
								src={
									influencers[idx]
										? influencers[idx].img.src
										: influencers[0].img.src
								}
								alt="Main logo"
								width={500}
								objectFit="cover"
								layout="fill"
								height={500}
							/>
						</div>
					</div>
					<div className="lg:hidden">
						<div className="relative ">
							<Image
								src={
									influencers[idx]
										? influencers[idx].img.src
										: influencers[0].img.src
								}
								alt="Main logo"
								width={500}
								objectFit="cover"
								height={500}
							/>
						</div>
					</div>
					<div className="hidden absolute lg:block  mx-5 fade-in-image transform transition-all duration-200 ease-linear -translate-x-[calc(100%+80px)] xl:-translate-x-[calc(100%+160px)] bottom-48">
						<div className="relative w-64 h-64 lg:w-72 lg:h-72">
							<Image
								src={
									idx < maxLn
										? influencers[idx + 1].img.src
										: influencers[0].img.src
								}
								alt="right logo"
								objectFit="cover"
								layout="fill"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return <div>Error</div>;
};

// collections: [
// 	[coll10, coll2, coll3, coll4, coll8, coll6, coll7, coll8, coll6, coll1],
// 	[coll4, coll9, coll1, coll4, coll1, coll7, coll6, coll2, coll2, coll7],
// 	[coll1, coll3, coll4, coll9, coll5, coll3, coll2, coll4, coll9, coll10],
// ]

function getAllimg(name) {
	const importAll = (r) => {
		let images = {};
		r.keys().map((item, _) => {
			images[item.replace("./", "")] = r(item);
		});
		return images;
	};
	let images;
	// Better find a way to have dynamic require context
	switch (name) {
		case "clara":
			images = importAll(
				require.context(
					"../public/collection/clara",
					false,
					/\.(png|jpe?g|svg)$/
				)
			);
			break;
		case "paola":
			images = importAll(
				require.context(
					"../public/collection/paola",
					false,
					/\.(png|jpe?g|svg)$/
				)
			);
			break;
		case "jules":
			images = importAll(
				require.context(
					"../public/collection/jules",
					false,
					/\.(png|jpe?g|svg)$/
				)
			);
			break;
		case "sullivan":
			images = importAll(
				require.context(
					"../public/collection/sullivan",
					false,
					/\.(png|jpe?g|svg)$/
				)
			);
			break;
		case "zeus":
			images = importAll(
				require.context(
					"../public/collection/zeus",
					false,
					/\.(png|jpe?g|svg)$/
				)
			);
			break;
	}
	const ARR = [];
	const arr = Object.keys(images);
	const length = Object.keys(images).length;
	for (let i = 0; i < length; i++) {
		ARR.push(images[arr[i]].default);
	}
	return ARR;
}
