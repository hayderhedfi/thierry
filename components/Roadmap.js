import Image from "next/image";
import { useRouter } from "next/router";
import volant2 from "../public/volant2.png";
import filante from "../public/filante.gif";
// import video from '../public/volante_video.mp4'

export const Roadmap = () => {
	const textContent = {
		"en-US": {
			content: [
				{
					date1: "Q2 2022",
					presentation1: [
						"- LAUNCH NEFTY SEVEN APRIL 2022",
						"- SALE OF THE FIRST COLLECTION 2,000 NEFTYS MAY 2022",
						"- INAUGURAL EVENT IN THE DECENTRALAND METAVERSE JUNE 2022",
						"- SECOND COLLECTION SALE 2,500 NEFTYS JUNE 2022",
					],
					date2: "Q3 2022",
					presentation2: [
						"- DEVELOPMENT OF THE METAVERSE ENVIRONMENT",
						"- ADDITION OF NEW ARTISTIC TALENTS",
						"- MEET-UPS BETWEEN ARTISTS AND MEMBERS",
					],
					date3: "Q4 2022",
					presentation3: [
						"- MUSICAL EVENT IN THE METAVERSE",
						"- SALE OF THE THIRD COLLECTION SEPTEMBER 16",
						"- CREATION OF EVENT STRUCTURE OR EVENT PARTNERSHIP",
						"- PURCHASE OF LAND IN THE METAVERSE",
					],
				},
			],
		},
		"fr-FR": {
			content: [
				{
					date1: "T2 2022",
					presentation1: [
						"- LANCEMENT NEFTY SEVEN AVRIL 2022",
						"- VENTE DE LA PREMIERE COLLECTION 2.000 NEFTYS MAI 2022",
						"- EVENEMENT INAUGURAL DANS LE METAVERSE DECENTRALAND JUIN 2022",
						"- VENTE DE LA DEUXIEME COLLECTION 2.500 NEFTYS JUIN 2022",
					],
					date2: "T3 2022",
					presentation2: [
						"- ELABORATION DE L’ENVIRONNEMENT METAVERSE",
						"- INTEGRATION DE NOUVEAUX TALENTS",
						"- MEET-UP ARTISTES ET MEMBRES",
					],
					date3: "T4 2022",
					presentation3: [
						"- EVENEMENT MUSICAL DANS LE METAVERSE",
						"- VENTE DE LA TROISIEME COLLECTION",
						"- CONSTITUTION D’UNE STRUCTURE OU PARTENARIAT EVENEMENTIEL",
						"- ACHAT DE TERRAINS DANS LE METAVERSE",
					],
				},
			],
		},
	};

	const { locale, locales, defaultLocale, asPath } = useRouter();
	const { title, content } = textContent[locale];

	return (
		<div
			className="lg:container roadmap-hero text-white relative"
			id="road">
			{content.map((items, i) => (
				<div key={i} className="relative z-10">
					<h1 className="py-4 text-left hero-title">Roadmap </h1>
					<div className="relative lg:visible lg:absolute astro-blanc-div">
						<Image src={volant2} alt="design image" width="300" height="300" />
					</div>
					<Milestone
						date={items.date1}
						textmilestoneprops={items.presentation1}
					/>
					<Milestone
						date={items.date2}
						textmilestoneprops={items.presentation2}
						order="reverse"
					/>
					<Milestone
						date={items.date3}
						textmilestoneprops={items.presentation3}
					/>
				</div>
			))}
		</div>
	);
};

const Milestone = ({ date, textmilestoneprops, order }) => {
	const TextMilestone = ({ textmilestoneprops }) => (
		<div className="milestone-text m-5 w-full lg:w-1/3">
			<h3 className="title-milestone">{date}</h3>
			<div className="flex-col text-sm lg:text-base">
				{textmilestoneprops.map((text, i) => (
					<p key={i}>{text}</p>
				))}
			</div>
		</div>
	);

	return (
		<div>
			<h2>{date} </h2>
			<div className="lg:container w-full flex justify-center ">
				{order == "reverse" ? (
					<TextMilestone textmilestoneprops={textmilestoneprops} />
				) : (
					<MilestoneImg />
				)}

				<div className="hidden lg:flex lg:flex-col lg:justify-center separator">
					<div className="boule-rose"></div>
					<div className="barre-rose"></div>
				</div>

				{order == "reverse" ? (
					<MilestoneImg />
				) : (
					<TextMilestone textmilestoneprops={textmilestoneprops} />
				)}
			</div>
		</div>
	);
};
const MilestoneImg = () => {
	return (
		<div className="container px-5 milestone-img hidden lg:flex justify-center m-5 w-1/3">
			<Image
				src={filante}
				className=""
				alt="milestone logo"
				width={250}
				height={200}
			/>
		</div>
	);
};
