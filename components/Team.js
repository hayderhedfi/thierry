import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import planet from "../public/planet.png";
import teamImg from "../public/TGL.png";
import Tilt from "react-parallax-tilt";
import nefty_btm from "../public/nefty_bottom.svg";
import sat from "../public/satellite.png";
import elliott from "../public/elliott.png";
import victor from "../public/victor.png";
import { Disclosure, Transition } from "@headlessui/react";
const textContent = {
	"fr-FR": {
		title: "Equipe",
		team: {
			un: "Nous sommes une équipe de 4 nerds passionnés par les crypto-monnaies, l'art, et la création de trucs cool.",
			deux: "L'écossais, ex financier d’envergure est notre maître de tous les contrats juridiques et financiers. Lolo, serial entrepreneur, est notre “couteau suisse” multifonctions. Vic est le Team Manager des artistes et créateurs, maître de cérémonie. Enfin, \"TC\" est le patron qui a eu l'idée de Nefty Seven, qui a lancé les pixels et les voxels, du marketing à la gestion de projet.",
			trois:
				"Accompagné par Eliott, artiste digital, responsable de la création des 4 Neftys et de toutes les illustrations de neftyseven.com.",
		},
		create_wallet: {
			title: "Comment télécharger metamask ?",
			un: "Télécharger une application de portefeuille crypto-monnaies telle que ",
			deux: "Créez votre compte. Contrairement à un portefeuille hébergé, vous n'avez pas besoin de partager d'informations personnelles pour créer un portefeuille non hébergé.",
			trois:
				"N'oubliez pas de noter soigneusement votre clé privée sur papier et jamais sur un support digital",
			quatre:
				"Transférez la crypto d’une plateforme d’échange telles que Binance ou Coinbase vers votre portefeuille.",
		},
	},
	"en-US": {
		title: "Team",
		team: {
			un: "We are a team of 4 nerds passionate about cryptocurrencies, art, and the creation of cool stuff.",
			deux: "The Scot, ex guru financier, our master of all legal, financial, and contractual stuff. Lolo, the serial entrepreneur, stopgap, multitasker. Vic, team manager of our artists and creators, the organization master. Finally, TC, the boss who came up with the whole Nefty Seven idea, kick started the pixels and voxels and does everything from marketing to project management.",
			trois:
				"Accompanied by Eliott  responsibly for the artistic creation of all our nifty Neftys.",
		},
		create_wallet: {
			title: "How to create a crypto wallet ?",
			un: "Download a wallet application like ",
			deux: "Create your account. Unlike a hosted wallet, you don't need to share any personal info to create a non-custodial wallet",
			trois:
				"Be sure to write down your private key on a piece of paper et NEVER on a digital device (Dropbox, Google Drive, Word…)",
			quatre:
				"Transfer crypto from a centralized exchange like Binance or Coinbase to your wallet.",
		},
	},
};

export const Team = () => {
	const { locale, locales, defaultLocale, asPath } = useRouter();
	const { title, team, create_wallet } = textContent[locale];

	function createMarkup(mytext) {
		return { __html: mytext };
	}
	return (
		<>
			<div className="container white lg:mt-20 relative" id="team">
				<h1 className="py-4 text-left hero-title relative z-20">{title}</h1>
				<div className="absolute left-0 top-0 md:top-28 satellite">
					<div className="relative w-64 h-64 lg:w-96 lg:h-96 ">
						<Image
							className="rotate-sat"
							src={sat}
							alt="sat image"
							objectFit="cover"
							layout="fill"
						/>
					</div>
				</div>
				<Tilt tiltReverse={true} tiltMaxAngleX={1} tiltMaxAngleY={1}></Tilt>

				<div className="dropdown-frame mb-10">
					<Disclosure as="div" className="dropdown my-4 w-full">
						<Disclosure.Button className="text-left lg:text-center md:text-4xl bg-[#20165a] dropdown dropdown-banner cursor-pointer w-full">
							Our amazing Crew !
						</Disclosure.Button>
						<Transition
							enter="transition duration-100 ease-out"
							enterFrom="transform scale-95 opacity-0"
							enterTo="transform scale-100 opacity-100"
							leave="transition duration-75 ease-out"
							leaveFrom="transform scale-100 opacity-100"
							leaveTo="transform scale-95 opacity-0">
							<Disclosure.Panel className="dropdown-content">
								<p>{team.un}</p>
								<br />
								<p>{team.deux}</p>
								<br />
								<p>{team.trois}</p>
								<div className="flex flex-wrap justify-center lg:justify-between w-full">
									<Image src={elliott} alt="team" width="200" height="200" />
									<Image src={teamImg} alt="team" width="200" height="200" />
									<Image src={victor} alt="team" width="200" height="200" />
								</div>
							</Disclosure.Panel>
						</Transition>
					</Disclosure>
				</div>
			</div>
		</>
	);
};
