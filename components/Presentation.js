import { useEffect, useState, useContext } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MediaBadge } from '../components/MediaBadge'
import { ConnectMetamask } from '../components/Metamask'
import { NFTRemaining } from "./NFTRemaining";
import opensea from '../public/opensea.png'
import { MintNFT, MAX_AMOUNT_PER_MINT, NAME_APP, NFT_PRICE_MATIC, SUMSUB_LINK, OPENSEA_LINK } from "../utils/ethers";
import { Modal } from './Modal';
import { Input } from "./Input";

import collector from "../public/whitelist.png";
import whitelist from "../public/collector.png";
import metaverse from "../public/metaverse.png";
import personalise from "../public/personnalised.png";
import classique from "../public/classique.png";
import filante from '../public/filante.gif'

const textContent = {
  "en-US": {
    title: "Welcome to the NEFTY SEVEN club !",
    subtitle: "Discover the mural folowing the",
    content: [
      {
        presentation: "The mural above hides the very first NFT artistically created for the launch of the N7 project. It is composed of 7.777 mini NFTs which, as they are minted, will reveal a unique NFT image. Get lucky! Through a random draw you could win an NFTs from one of the following categories :",
        cat1: "-  7 NFTs COLLECTOR: entitling you to the original mural NFT in a unique color",
        cat2: "-  777 NFTs WHITELIST : privileged access to the presales of the first NEFTY collection",
        cat3: "-  777 NFTs METAVERSE : an invitation to the first ever NEFTY event in the Metaverse",
        cat4: "-  777 NFTs MADE TO MEASURE : an opportunity to order a customised NFT of you",
        cat5: "-  5439 CLASSIC NFTs: to collect, share or trade",
        cta: "See more",
        startMint: "NEFTY SEVEN LAUNCH : ",
        mintEvent: "The mint will start : ",
        dateMint : "04-25-2022 at 7.00 p.m (GMT +1)",
        completeKYC: "Be amongst the privileged to grab your ticket to access the first collection ! Please complete the KYC before the launch date !",
        buttonKYC: "Validate KYC",
        infoPrice: " 35 euros by credit or debit card / 28 Matic"
      },
    ],
    concept: "<p>NEFTY SEVEN's ambition is to support ownership between its artists and their community. </p> <br/> <p>NEFTY SEVEN through cutting edge technological advances, will enable artistic talents to express themselves, imagine and create in the universe of the Metaverse.</p> <br/> <p>ARTISTS want to get closer to their community. To reward, to share, and to offer to their followers, a human, artistic and digital experience.</p> <br/> <p>NEFTIES will be you! A community, who will encourage, support, and participate in this unique adventure!</p> <br/> <p>NEFTY NFT’s will allow you to post on your favorite social networks, and expand your community. It will give you privileged access to private events: concerts, fashion shows, previews, meetings with artistic talents, and many other gifts that can be won!</p> <br/><p>NEFTY SEVEN Club of talents, are often charity sponsors and are equally committed to producing and executing charitable events that benefit their organizations such as Les Enfants de la Terre, and the Association AÏDA.</p>"
  },
  "fr-FR": {
    title: "Bienvenue dans le club NEFTY SEVEN !",
    subtitle: "DéCOUVREZ LA FRESQUE A LA FIN DU ",
    content: [
      {
        presentation: "La fresque présentée ci-dessus cache le premier NFT réalisé pour le lancemet du projet N7. Elle est constituée de 7.777 NFTs qui au fur et à mesure de leur création, laisseront place au NFT original. Tente ta chance pour obtenir, à travers un tirage aléatoire, l’un des NFT d’une des catégories suivantes : ",
        cat1: "-  7 NFTs COLLECTOR : donnant droit à l’obtention de la fresque originale à la couleur de l’étoile",
        cat2: "-  777 NFTs WHITELIST : un accès aux préventes de la première collection",
        cat3: "-  777 NFTs METAVERSE : une invitation au premier évènement dans le Métaverse ",
        cat4: "-  777 NFTs PERSONNALISÉ : une commande d’un NFT sur mesure (cf. FAQ)",
        cat5: "-  5439 NFTs CLASSIQUE",
        cta: "En savoir plus",
        startMint: "LANCEMENT NEFTY SEVEN :",
        mintEvent: "Le mint aura lieu : ",
        dateMint : "le 25/04/2022 à 19 heures (GMT +1)",
        completeKYC: "Sois privilégié, prends ton ticket d’accès à la première collection en validant ton KYC avant la date du mint.",
        buttonKYC: "Compléter le KYC",
        infoPrice: "35 euros par carte bancaire / 28 Matic"
      },
    ],
    concept: "<p>L’ambition de NEFTY SEVEN : donner le pouvoir à l’artiste et sa communauté.</p> <p>NEFTY SEVEN en pointe des évolutions technologiques, a réuni des talents qui vont s’exprimer, imaginer et créer dans l’univers du Métavers. </p> <br/><p>Les ARTISTES, ont le souhait de retrouver une proximité, récompenser, partager, et offrir aux membres, une aventure humaine et artistique.</p> <br/> <p>Les NEFTIES : une communauté, qui va encourager, supporter, et vivre une folle aventure ! Ton NEFTY te permettra de t’afficher sur tes réseaux préférés, et de représenter ta communauté.</p> <p>Il te donnera accès à des événements privés : concert, défilé de mode avant-première, rencontre avec les talents, et autres cadeaux que tu pourras gagner !</p> <br/> Le Club NEFTY SEVEN et nos talents, pour la plupart parrains et marraines d’œuvres de bienfaisance, ont à cœur de produire et réaliser des évènements au profit de leurs associations : Les Enfants de la Terre, et l’Association AÏDA. "
  },
};

export const Presentation = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { title, content, subtitle, concept } = textContent[locale];
  const [amount, setAmount] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);

  const [displayMarkUp, setDisplayMarkup] = useState(false);

  const _mint = async () => {
    if (amount <= 0 || isNaN(amount)) {
      setErrorMsg('Amount must be greater than 0');
    } else {
      console.log("amount before : " + amount);
      await MintNFT(amount, setErrorMsg);
    }
  }

  useEffect(() => {
    setDisplayMarkup(true);
  }, []);

  function createMarkup(mytext) {
		return {__html: mytext};
	}
  
  return (
    <div className="lg:container text-white w-full h-full flex flex-wrap" id="presentation" >
      <h1 className='container text-white text-center semi-bold fs-30 py-5 mb-5 uppercase semi-bold'>{subtitle} <span>MINT</span></h1>
      {content.map((items, i) => (
        <div key={i} className="flex flex-col xl:flex-row gap-8 lg:gap-4 xl:gap-1">
          <div className="w-full xl:w-1/2" key={i}>
            <p className="text-left"> {items.presentation} </p>
            <br></br>
            <div className="flex flex-wrap justify-between grid-col-2">
              <ul className="w-full">
                <div className="flex justify-between">
                  <li className="w-2/3 lg:w-3/4 py-3 fs-20 lg:py-5 ">{items.cat1} </li> 
                  <div className="w-1/3 lg:w-1/4 flex items-center justify-center">
                    <Image src={collector}
                      className='grow cursor-pointer liImage'
                      width={75}
                      height={75} />
                  </div>
                </div>
              </ul>
              <ul className="w-full">
                <div className="flex justify-between">
                  <li className="w-2/3 lg:w-3/4 py-3 fs-20 lg:py-5 ">{items.cat2} </li> 
                  <div className="w-1/3 lg:w-1/4 flex items-center justify-center">
                    <Image src={whitelist}
                      className='grow cursor-pointer liImage'
                      width={75}
                      height={75} />
                  </div>
                </div>
              </ul>
              <ul className="w-full">
                <div className="flex justify-between">
                  <li className="w-2/3 lg:w-3/4 py-3 fs-20 lg:py-5 ">{items.cat3} </li> 
                  <div className="w-1/3 lg:w-1/4 flex items-center justify-center">
                    <Image src={metaverse}
                      className='grow cursor-pointer liImage'
                      width={75}
                      height={75} />
                  </div>
                </div>
              </ul>
              <ul className="w-full">
                <div className="flex justify-between">
                  <li className="w-2/3 lg:w-3/4 py-3 fs-20 lg:py-5 ">{items.cat4} </li> 
                  <div className="w-1/3 lg:w-1/4 flex items-center justify-center">
                    <Image src={personalise}
                      className='grow cursor-pointer liImage'
                      width={75}
                      height={75} />
                  </div>
                </div>
              </ul>
              <ul className="w-full">
                <div className="flex justify-between">
                  <li className="w-2/3 lg:w-3/4 py-3 fs-20 lg:py-5 ">{items.cat5} </li> 
                  <div className="w-1/3 lg:w-1/4 flex items-center justify-center">
                    <Image src={classique}
                      className='grow cursor-pointer liImage'
                      width={75}
                      height={75} />
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center xl:w-1/2 py-4 lg:px-5 text-center text-white">
            <div className="presentation-game m-auto lg:w-3/4 py-10 p-2 lg:p-5">
              <h2 className="py-4 text-center text-3xl font-bold pink">{items.startMint}</h2>
              <br />
              <p className="pb-5">{items.completeKYC}</p>
              <p> {items.mintEvent} </p>
              <p className="font-bold"> {items.dateMint} </p>
              <div className="my-10">
                <p>{items.infoPrice}</p>
              </div>
              <div className="text-center justify-center lg:justify-start lg:items-center my-5 mt-5">
                <a className="btn py-3 px-5 mt-5 lg:px-5 pink-linear" 
                  // style={{display: "table-cell"}} 
                  href={SUMSUB_LINK} target="_blank">
                  {items.buttonKYC}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-wrap px-1 justify-center lg:justify-start lg:items-center py-12">
        <div className="text-center lg:text-left mt-10 relative">
          {displayMarkUp 
          ? 
          <>
            <h2 className="py-4 text-center text-3xl font-bold">Concept <span className="pink">Nefty</span></h2>
            <p className="text-left lg:w-3/4 m-auto" dangerouslySetInnerHTML={createMarkup(concept)}></p>
          </>
          : <p>Loading...</p>}
          <a href={OPENSEA_LINK} target="_blank" >
            <div className="mt-10 flex justify-center">
              <Image src={opensea} alt="opensea"/>
            </div>
          </a>
          <div className="absolute left-0 bottom-0">
            <Image
              src={filante}
              className=''
              alt="milestone logo"
              width={250}
              height={200} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}