import { useContext, useEffect, useState } from "react";
import Head from "next/head";

import { Influenceurs } from "../components/Influenceurs";
import { Roadmap } from "../components/Roadmap";
import { Faq } from "../components/Faq";
import { Team } from "../components/Team";
import { Sas_Mint } from "../components/Sas_Mint";
import { Context } from "../utils/context";
import {
	connectToContract,
	getAccount,
	getRemainingToken,
} from "../utils/ethers";
import { Presentation } from "../components/Presentation.js";
import { Welcome } from "../components/Welcome.js";

export default function Home() {
	const { state, dispatch } = useContext(Context);

	useEffect(async () => {
		// const remainingTks = await getRemainingToken();
		// dispatch({ type: "SET_REMAINING_TKS", payload: remainingTks })
	}, []);

	return (
		<>
			<Head>
				<title>Nefty Seven</title>
				<meta name="nefty7 nft" content="Nefty7 nft crypto crypto-currency" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<main className="container px-20 w-full mx-auto">
				<Welcome />
				<Presentation />
				<hr className="hr-hero" />
				<Influenceurs />
				<hr className="hr-hero" />
				<Sas_Mint />
				<hr className="hr-hero" />
				<Roadmap />
				<hr className="hr-hero" />
				<Team />
				<Faq />
			</main>
		</>
	);
}
