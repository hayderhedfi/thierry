import Image from "next/image";
import { useRouter } from "next/router";
import { Fresque } from '../components/Fresque';
import filante from '../public/filante.gif'

export const Welcome = () => {

	const textContent = {
		"fr-FR": {
			content: [
				{
				title : "Bienvenue dans le club",
				title2 : "NEFTY SEVEN",
				presentation : [
					"Deviens membre actif en obtenant ton NFT qui t’ouvrira les portes de l’univers de tes artistes et créateurs favoris.",
					" Nefty Seven c’est une collection de 777 NFT par artiste.",
					"C’est aussi le droit d’accès à une communauté avec des événements inédits, une expérience innovante dans les réseaux sociaux et jusque dans le Métaverse !",
					"Obtiens ton avatar, plonge dans l’univers des NEFTYS et deviens un acteur à part entière de la communauté : reprends le pouvoir !"
				]
				},
			],
		},
		"en-US": {
			content: [
				{
					title: "Welcome to the ",
					title2 : "NEFTY SEVEN",
					title3 : " club",
					presentation: [
						"Become an active member by buying your first NFT which will open the door to the universe of your favorite artists and creators."
						, "Nefty Seven is a limited collection of 777 NFT’s per artist."
                        , "It's also gives to access a community providing unique events, an innovative experience in social networking and exploration in the Metaverse!"
						, "Grab your avatar, dive into the NEFTYS universe and become a fully-fledged actor of our community: you have the control !"
					]
				},
			],
		},
	};

	const { locale } = useRouter();
	const { content } = textContent[locale];	

	return(
		<div className='flex flex-wrap'>
			<div className='text-white'>
				{content.map((items, i) => (
					<div key={i} className="">
						<h1 className='hero-title mb-4'>{items.title} <span className="pink">{items.title2}</span> {items.title3} !</h1>
						{items.presentation.map((item, j) => {
							return <p className="fs-20" key={j}>{item}</p>
						})}
					</div>
				))}
			</div>
			<div className='flex flex-wrap lg:flex-nowrap w-full'>
				<div className='flex items-center justify-center w-full my-5'>
					<div className='countdown-main'></div>
					<Fresque />
				</div>
			</div>
			<div className="absolute right-0">
				<Image
					src={filante}
					className=''
					alt="milestone logo"
					width={250}
					height={200} 
				/>
			</div>
		</div>
	);
	}