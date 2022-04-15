import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// import { ConnectMetamask } from "./Metamask";
import { Btn } from "./Button";
import { Context } from "../utils/context";
import { PaymentChoice } from "./PaymentChoice";
import { Modal } from "./Modal";
import { SUMSUB_LINK } from "../utils/ethers";

import filante from '../public/filante.gif'
import volant1 from '../public/volant1.png'
import open from '../public/open.svg'


export const Sas_Mint = () => {
	const [showModal, setShowModal] = useState(false);
	const [doorOpen, setDoorOpen] = useState('inactive');

	const {state, _} = useContext(Context);
	const textContent = {
		"en-US": {
			title: "Obtain your",
			content: [
				{
					explain_title : "An ARTISTIC UNIVERSE realized in the form of VOXEL.",
					explain_1 : "NEFTY SEVEN Ambassadors will be declined, in 7, 77, and 777 NEFTYs",
					explain_4 : "The Collector, Rare and Legendary",
					explain_5 : "10% of minted NEFTYs will have privileges, physical or virtual attached.",
					explain_2 : "CUSTOMISED COLLECTION You will be able to order your own customised NEFTY from the costumes and characters of the NEFTY collection",
					explain_3 : "OWNERSHIP OF A NEFTY will enable you to participate in the decisions and evolution of our project.",
					explain_kyc: [
						"Do your KYC !",
						"Connect your wallet !",
						"Mint !"
					]
				},
			],
		},
		"fr-FR": {
			title: "Obtiens ton",
			content: [
				{
					explain_title : "Un UNIVERS ARTISTIQUE réalisé sous forme de VOXEL",
					explain_1 : "Chaque Ambassadeur de NEFTY SEVEN sera décliné, en 7, 77, et 777 NEFTYs.",
					explain_4 : "Le Collector, Rare et Légendaire",
					explain_5 : "10% des NEFTYs seront porteurs de privilèges, physiques ou virtuels",
					explain_2 : "La collection N7, pesonnalisée : vous pourrez commander votre avatar à partir des costumes et personnages de la collection",
					explain_3 : "DÉTENIR UN NEFTY, TE RENDRA ACTEUR ET DÉCISIONNAIRE DE NOTRE PROJET.",
					explain_kyc: [
						"Fais ton KYC !",
						"Connecte ton wallet !",
						"Fais ton mint !"
					]
				},
			],
		},
	};
	const { locale, locales, defaultLocale, asPath } = useRouter();
  const { title, content } = textContent[locale];

	useEffect(async () => {
		try {
			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'});
			accounts[0] && state.kyc ? setDoorOpen('active') : setDoorOpen('inactive');
		} catch(e) {
			console.log(e);
		}		
	}, []);

	return (
		<div className="lg:container relative">
			<div className="hidden lg:block astro-rose-div ">
				<Image src={volant1} alt="astronaut" width="250" height="250" />
			</div>
			<div className="nft-hero flex flex-wrap mt-10 text-white">
				{content.map((items, i) => (
					<div key={i}>
						<div className="w-full">
							<h2 className="py-4 text-left fs-50 semi-bold">
								Collection <span className="pink">NEFTYSEVEN</span>
							</h2>
							<p className="lg:w-3/4 text-left py-3 font-bold">
								{" "}
								{items.explain_title}{" "}
							</p>
							<p className="lg:w-3/4 text-left py-3"> - {items.explain_1} </p>
							<p className="lg:w-3/4 text-left py-3"> - {items.explain_4} </p>
							<p className="lg:w-3/4 text-left py-3"> - {items.explain_5}</p>
							<p className="lg:w-3/4 text-left py-3"> - {items.explain_2} </p>
							<p className="lg:w-3/4 text-left py-3"> {items.explain_3} </p>
						</div>
						<div className="w-full mb-10 lg:mb-0">
							<h2 className="py-4 text-left fs-50 semi-bold">
								{title} <span className="pink">NEFTY</span>
							</h2>
							<ul>
								{items.explain_kyc.map((items, j) => {
									return <li key={j} className="text-xl">- {items}</li>;
								})}
							</ul>
						</div>
					</div>
				))}
				<div className="flex flex-col xl:flex-row justify-center m-auto w-full">
					<div className="flex justify-center align-center text-center">
						<a
							className="btn py-2 px-5 pink-linear w-160px"
							href={SUMSUB_LINK}
							target="_blank">
							KYC
						</a>
					</div>

					<div className="my-5 lg:m-10 align-center">
						<Modal
							onClose={() => setShowModal(false)}
							show={showModal}
							color="pink-linear">
							<PaymentChoice />
						</Modal>
						<div className="w-full relative flex justify-center">
							<button onClick={() => setShowModal(true)} className="btn pink-linear py-5 px-8 mint-btn-kyc flex items-center">
								Mint
							</button>
							<Image src={open} width="700" height="400" />
						</div>
					</div>
					<div className="flex justify-center">{/* <ConnectMetamask /> */}</div>
				</div>
				<div className="hidden lg:absolute right-0 bottom-0">
					<Image
						src={filante}
						className=""
						alt="milestone logo"
						width={250}
						height={200}
					/>
				</div>
				<div className="hidden lg:absolute left-0 bottom-0">
					<Image
						src={filante}
						className=""
						alt="milestone logo"
						width={250}
						height={200}
					/>
				</div>
			</div>
		</div>
	);
}
