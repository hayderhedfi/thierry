import Link from 'next/link';
import Image from 'next/image';

import twitter_logo from '../public/twitter.svg'
import discord_logo from '../public/discord.svg'
import instagram_logo from '../public/instagram.svg'

export const MediaBadge = ({ frame_class }) => {
	const medias = [
		{
			name: "Discord",
			src: discord_logo,
			url: "https://discord.gg/neftyseven"
		},
		{
			name: "Twitter",
			src: twitter_logo,
			url: "https://twitter.com/nefty_seven"
		},
		{
			name: "Instagram",
			src: instagram_logo,
			url: "https://www.instagram.com/neftyseven/"
		},
	];

	return (
		<div className={`flex items-center ${frame_class}`}>
			{medias.map((m, i) => {
				return <a key={i} href={m.url} target="_blank">
					<div className="mr-3 xl:mr-5 img-media">
						<Image
							className='cursor-pointer'
							src={m.src}
							alt={`${m.name} logo`}
						/>
					</div>
				</a>
			})}
		</div>
	);
}