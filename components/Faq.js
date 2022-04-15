import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import planet from "../public/planet.png";
import team from "../public/TGL.png";
import Tilt from "react-parallax-tilt";
import nefty_btm from "../public/nefty_bottom.svg";
import sat from "../public/satellite.png";
import elliott from "../public/elliott.png";
import victor from "../public/victor.png";
import { Disclosure, Transition } from "@headlessui/react";
import volant1 from "../public/volant1.png";

const textContent = {
	"fr-FR": {
		title: "FAQ",
		content: [
			{
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
				data: [
					{
						question: "Qu'est ce qu'un NFT?",
						answer:
							"Un NFT est un 'jeton non fongible', une façon élégante de dire qu'il s'agit d'un objet numérique unique que les utilisateurs peuvent acheter, posséder et échanger. Certains NFT ont pour fonction première d'être des œuvres d'art numérique et d'avoir l'air cool, d'autres offrent une utilité supplémentaire, comme un accès exclusif au metaverse ou la participation à un événement. Il faut savoir que les NFTS sont des œuvres d'art uniques et rares, qui peuvent également servir de 'carte de membre'. ",
					},
					{
						question: "Où va mon NFT une fois que j'ai acheté un Nefty ?",
						answer:
							'Votre NFT apparaît sur l\'adresse connectée ou le portefeuille utilisé pour acheter le Nefty. Vous pouvez choisir votre Nefty sur notre site web en cliquant sur www.neftyseven.com ou également sur <a className="font-bold" href="https://opensea.io/." target="_blank">OpenSea</a> pour acheter un Nefty sur le marché secondaire. ',
					},
					{
						question: "Ça a l'air cool ! Comment puis-je m'impliquer ?",
						answer:
							'Un bon point de départ est de rejoindre notre <span className="font-bold"><a href="https://discord.gg/neftyseven" target="_blank">Discord</a></span> qui abrite une communauté nombreuse et très active de passionnés de NFT, vous n\'avez pas besoin d\'être un propriétaire de Nefty pour nous rejoindre ! Tout le monde est plus que bienvenu pour participer à la conversation, faites-nous part de vos idées et passez du temps avec d\'autres personnes qui aiment les Neftys !',
					},
					{
						question: "Les Neftys sont-ils un bon investissement ?",
						answer:
							"En fin de compte, c'est à vous de prendre cette décision. Nous pensons que les Neftys ont une longue vie devant eux et qu'il s'agit d'un projet en constante évolution. Cependant, comme pour la plupart des investissements, le succès des Neftys dépend de nombreux facteurs et variables...et personne ne connaît l'avenir. Comme pour toute chose dans la vie, ne dépensez pas l'argent que vous ne pouvez vous permettre de perdre.",
					},
					{
						question: "Qu'est ce qu'un mint ?",
						answer:
							"« Minter » signifie simplement l'action d'acheter un NFT sur le marché primaire.",
					},
					{
						question: "Quand aura lieu le lancement ?",
						answer: "Lancement le 25 avril à partir de 19 heures CET.",
					},
					{
						question: "Qu'est-ce que le Nefty Whitelist ?",
						answer:
							"Dans le monde des NFTs, une Whitelist est une liste de personnes qui bénéficient d'un accès anticipé et garanti au Mint à une date et dans une fenêtre de temps spécifique. Il existe 777 “Neftys Whitelist” qui te permettront de passer commande 48h avant la vente de la première collection de 2500 Neftys. ",
					},
					{
						question: "Qu’est-ce que le Nefty Metaverse ?",
						answer:
							"Il existe 777 Neftys Metaverse qui te donneront accès au premier événement organisé dans un Metaverse dans un délai proche. ",
					},
					{
						question: "Qu’est-ce que le Nefty Metaverse ?",
						answer:
							"777 Neftys personnalisés te donneront le droit en avant-première d’accéder à l’achat (300,00€ ou équivalent MATIC selon le cours du marché) et à la commande d’un Nefty à ton image. Après envoi de ta photo, ton choix d’un personnage, et d’un fond de couleur. Passe ta commande par e-mail: support@neftyseven.com en nous communiquant ton adresse de wallet Metamask.",
					},
					{
						question: "Quel est le prix du NFT ?",
						answer: "28 MATIC + Gas fees ou 35 euros par carte bancaire.",
					},
					{
						question: "Où dois-je minter ?",
						answer:
							"Directement sur notre site web Neftyseven. Une fois les 7777 Neftys épuisés, la fresque sera dévoilée et vous obtiendrez votre Nefty sur votre wallet .",
					},
					{
						question: "Quand sera dévoilé mes NFT ?",
						answer: "72 heures après le mint.",
					},
					{
						question:
							"Votre smart-contract sera-t-il optimisé pour réduire les frais de gas ? ",
						answer:
							"Notre contrat est déployé sur la blockchain Polygon afin de minimiser sa consommation énergétique ainsi qu'optimiser les frais de gas. Les smart-contrats et le site ont été audités par une tierce partie pour garantir la sécurité et la sûreté. ",
					},
					{
						question: "Comment télécharger Metamask ?",
						answer:
							"Metamask est téléchargeable en tant qu'extension de navigateur web, donc directement sur Google ou sur leur site officiel.",
					},
					{
						question: "Comment créer un portefeuille de crypto-monnaies ?",
						answer:
							"Télécharger une application de portefeuille crypto-monnaies telle que Metamask. Créez votre compte. Contrairement à un portefeuille hébergé, vous n'avez pas besoin de partager d'informations personnelles pour créer un portefeuille non hébergé. N'oubliez pas de noter soigneusement votre clé privée sur papier et jamais sur un support digital.Ensuite transférez la crypto d’une plateforme d’échange telles que Binance ou Coinbase vers votre portefeuille.",
					},
					{
						question: "Comment sécuriser votre porte-monnaie ?",
						answer:
							"Créez un mot de passe sécurisé ! Rendez votre mot de passe unique, ne réutilisez pas un ancien mot de passe. Pensez à utiliser une phrase de passe à la place, une séquence de 4 mots aléatoires ou plus. Pensez à utiliser un générateur et un gestionnaire de mots de passe, comme Bitwarden. Fixez un délai pour passer à un nouveau mot de passe. Note : si vous perdez votre phrase de 12 mots, votre application de portefeuilles ne peut pas vous aider à récupérer votre portefeuille et vos fonds seront perdus à jamais.",
					},
					{
						question:
							"Quelle est l'utilité d'un portefeuille de crypto-monnaies ? ",
						answer:
							"Les portefeuilles de crypto-monnaies sont utilisés pour conserver vos fonds, stocker vos NFTs et vos crypto-actifs. ",
					},
					{
						question: "Qu'est ce qu'un smart contract ?",
						answer:
							"Un smart-contract est un accord signé entre deux parties sous la forme d'un code informatique. Il fonctionne sur la blockchain, il est donc stocké dans une base de données publique et ne peut pas être modifié. Les transactions qui se produisent dans un smart-contract sont traitées par la blockchain, ce qui signifie qu'elles peuvent être envoyées automatiquement sans l'intervention d'un tiers.",
					},
				],
			},
		],
	},
	"en-US": {
		title: "FAQ",
		content: [
			{
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
				data: [
					{
						question: "What’s an NFT?",
						answer:
							"NFT stands for a “non-fungible token”, a fancy way of saying it is a one-of-a-kind  digital object that users can buy, own and exchange. Some NFTs have the primary  function of being digital artworks and looking cool, others provide an additional utility,  such as exclusive access to websites or participation in an event.  Consider that NFTS are rare pieces of artwork which can also serve as “member  cards”.",
					},
					{
						question: "What’s Polygon?",
						answer:
							'Polygon is a blockchain, as well as Ethereum, and the technology powering the cryptocurrency MATIC (MATIC). For further details, check out their website <span className="font-bold"><a href="https://polygon.technology/" target="_blank">Polygon</a></span>.',
					},
					{
						question: "Where does my NFT go once I purchase a Nefty?",
						answer:
							'Your NFT appears on the connected address or wallet used to purchase the Nefty. You  can find your Nefty on our website by clicking on Neftyseven.com, or also on <a className="font-bold" href="https://opensea.io/." target="_blank">OpenSea</a>',
					},
					{
						question: "That sounds cool! How can I get involved?",
						answer:
							'A good starting point is joining our  <span className="font-bold"><a href="https://discord.gg/neftyseven" target="_blank">Discord</a></span>, which is home to a massive and very  active community of NFT enthusiasts, you don\'t need to be a cool Nefty owner to join  us! Everyone is more than welcome to participate in the conversation, let us know  about your ideas and spend time with other people who love Neftys!',
					},
					{
						question: "Are the NEFTYS a good investment ?",
						answer:
							"Eventually, it’s up to you to make that decision. We believe that the Neftys have a long  life ahead, and that this is an ever-evolving project. However, as with most things, the  success of Neftys depends on many factors and variables... and no one knows the  future. As with anything in life, don’t spend money you can’t afford not to have.",
					},
					{
						question: "Where do Neftys come from? ",
						answer:
							"We are a team of 4 nerds who are passionate about cryptocurrencies, art, and the  creation of cool stuff. Our team is composed of Ness, who is responsible for the  Neftys creation and all the illustrations of Nefy Seven. Pat, hyped as a lightning bolt, is  responsible for the technical aspect, smart contracts and all these “fun” things. The  Scottish, ex wingspan financier and our master of all the judicial, financial and LO  contracts, serial entrepreneur, stopgap, everywhere !  Finally, TC is the boss who came up with the whole Nefty seven idea, who kickstarts  pixels and voxels and goes from marketing to project management.",
					},
					{
						question: "What is a mint ?",
						answer: "Minting simply means the action of buying an NFT.",
					},
					{
						question: "What is a whitelist ? ",
						answer:
							"A whitelist in the NFT world is a list of people who get early and guaranteed access to  mint at a specific date and window of time.",
					},
					{
						question: "When will the launch take place ?",
						answer: "Public Mint on 15 April starting from 7pm HNE",
					},
					{
						question: "What is the price of the NFT? ",
						answer: "25 MATIC + Gas fee",
					},
					{
						question: "Where do I mint ?",
						answer:
							"Directly on our website NeftySeven. Once the Neftys are out of stock, they can be purchased on OpenSea’s secondary marketplace. ",
					},
					{
						question: "When will my Nefty be revealed ?  ",
						answer: "72 hours after the mint.",
					},
					{
						question: "Will your smart contract be audited and optimized?",
						answer:
							"Our contract will be optimized to allow low consumption of gas and will be audited by  a third party to guarantee security and safety. Keeping in mind our vision for the  project on the long term basis, we’d like to make sure that our first launch is flawless.",
					},
					{
						question: "What’s Metamask? ",
						answer:
							'MetaMask is a software cryptocurrency wallet used to store your Ethereum. It’s  required to purchase a Nefty. Having a wallet grants you an Ethereum address (e.g.  0xABCD....1234), which is also where your NFT is stored. To learn more about  Metamask and its ease of use , <a href="https://metamask.io/" target="_blank">click here</a> ',
					},
					{
						question: "How to download metamask ?",
						answer:
							"First download a wallet app Metamask. Then create your account. Unlike a hosted wallet, you don't need to share any  personal info to create a non-custodial wallet. Please be sure to write down your private key. Finally, transfer crypto to your wallet. For more information, you can google it.",
					},
					{
						question: "What is the utility of a crypto wallet ?",
						answer:
							"Crypto wallets are used to hold your funds, store your NFT and mint. ",
					},
					{
						question: "What is a smart contract ?",
						answer:
							"A smart contract is an agreement between two people in the form of computer code.  They run on the blockchain, so they are stored on a public database and cannot be  changed. The transactions that happen in a smart contract are processed by the  blockchain, which means they can be sent automatically without a third party.",
					},
					{
						question: "How to secure your wallet ?",
						answer:
							"<p> 1 - Create a secure password! </p> <p> 2 - Make your password unique, do not reuse an old password.</p> <p> 3 - Consider using a passphrase instead, a sequence of 4 or more random words. </p> <p> 4 - Consider using a password generator and manager, like Bitwarden.</p> <p> 6 - Setup a time frame to rotate to a new password. </p> <p>Note: If if you lose your code phrase, your wallet provider can’t help you recover your wallet and your funds will be lost forever.</p>",
					},
				],
			},
		],
	},
};

export const Faq = () => {
	const { locale, locales, defaultLocale, asPath } = useRouter();
	const { title, content } = textContent[locale];

	const [active, setActive] = useState();

	function createMarkup(mytext) {
		return { __html: mytext };
	}
	return (
		<>
			<div className="container white lg:mt-20 relative" id="faq">
				<div className="pb-8 lg:text-left hero-title  relative z-20">
					{title}
				</div>
				<div className="absolute right-0 top-28 md:top-56 lg:top-44 satellite">
					<div className="relative w-40 h-40 lg:w-64 lg:h-64">
						<Image
							className="rotate-sat"
							src={volant1}
							alt="astronaut"
							objectFit="cover"
							layout="fill"
						/>
					</div>
				</div>
				<Tilt tiltReverse={true} tiltMaxAngleX={1} tiltMaxAngleY={1}></Tilt>
				<Disclosure as="div">
					<Disclosure.Button className="text-left lg:text-center md:text-4xl dropdown dropdown-banner cursor-pointer w-full">
						What's on your Mind ?
					</Disclosure.Button>
					<Transition
						enter="transition duration-100 ease-out"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition duration-75 ease-out"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0">
						<Disclosure.Panel>
							{content.map((items, i) => (
								<div key={i} className="dropdown-frame mb-10">
									<Disclosure
										as="div"
										defaultOpen
										className="dropdown my-4 w-full">
										<Disclosure.Button className="text-left dropdown dropdown-banner cursor-pointer w-full">
											{items.create_wallet.title}
										</Disclosure.Button>
										<Transition
											enter="transition duration-100 ease-out"
											enterFrom="transform scale-95 opacity-0"
											enterTo="transform scale-100 opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform scale-100 opacity-100"
											leaveTo="transform scale-95 opacity-0">
											<Disclosure.Panel static className={"dropdown-content"}>
												<p>
													1 - {items.create_wallet.un}{" "}
													<a
														className="pink"
														href="https://metamask.io/"
														target="_blank">
														Metamask
													</a>
												</p>
												<br />
												<p>2 - {items.create_wallet.deux}</p>
												<br />
												<p>3 - {items.create_wallet.trois}</p>
												<br />
												<p>4 - {items.create_wallet.quatre}</p>
											</Disclosure.Panel>
										</Transition>
									</Disclosure>
									{items.data.map((d, j) => {
										return (
											<Disclosure
												as="div"
												key={j}
												className="dropdown my-4 w-full">
												<Disclosure.Button className="text-left dropdown dropdown-banner cursor-pointer w-full">
													{d.question}
												</Disclosure.Button>
												<Transition
													enter="transition duration-100 ease-out"
													enterFrom="transform scale-95 opacity-0"
													enterTo="transform scale-100 opacity-100"
													leave="transition duration-75 ease-out"
													leaveFrom="transform scale-100 opacity-100"
													leaveTo="transform scale-95 opacity-0">
													<Disclosure.Panel className={"dropdown-content"}>
														{!d.answer && (
															<Image
																src={team}
																alt="team"
																width="360"
																height="220"
															/>
														)}
														<p
															dangerouslySetInnerHTML={createMarkup(d.answer)}
														/>
													</Disclosure.Panel>
												</Transition>
											</Disclosure>
										);
									})}
								</div>
							))}
						</Disclosure.Panel>
					</Transition>
				</Disclosure>
			</div>
			<div className="flex justify-center mt-16">
				<div className="planet">
					<div className="relative">
						<Image
							src={planet}
							objectFit="cover"
							layout="fixed"
							alt="planet"
							width="280"
							height="220"
						/>
					</div>
				</div>
				<div className="relative w-full h-56">
					<Image
						src={nefty_btm}
						alt="nefty_btm image"
						objectFit="contain"
						layout="fill"
					/>
				</div>
			</div>
		</>
	);
};
