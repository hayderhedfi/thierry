import Link from 'next/link';
export const Footer = () => {
  const company = [
    {
      name: "Conditions Générales d'Utilisation",
      url: "/cgu"
    },
    {
      name: "Conditions Générales de Vente",
      url: "/cgv"
    },
    {
      name: "FAQ",
      url: "#faq"
    }
  ]
  const community = [
    {
      name: "Discord",
      url: "https://discord.gg/rJU7tk3Q6Z"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/nefty_seven"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/neftyseven/"
    }
  ];

  return (
		<footer className="container px-5 text-white footer">
			<div className="mx-6 py-5 text-center md:text-left">
				<div className="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-8 row">
					<div className="">
						<h6 className="uppercase font-bold mb-4 flex items-center justify-center md:justify-start">
							Contact
						</h6>
						<p>
							<a className="" href="mailto:support@neftyseven.com">
								support@neftyseven.com
							</a>
						</p>
					</div>
					<div className="lg:pl-10">
						<h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
							Communauté
						</h6>
						{community.map((media, i) => {
							return (
								<p key={i} className="mb-4">
									<Link href={media.url} className="text-gray-600">
										{media.name}
									</Link>
								</p>
							);
						})}
					</div>
					<div className="">
						<h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
							Références
						</h6>
						{company.map((media, i) => {
							return (
								<p key={i} className="mb-4">
									<Link href={media.url} className="text-gray-600">
										{media.name}
									</Link>
								</p>
							);
						})}
					</div>
				</div>
			</div>
			<div className="text-center pb-2 myGreyBg">
				<span>© 2022 Copyright : </span>
				<a className="font-semibold" href="https://tailwind-elements.com/">
					{" "}
					Nefty Seven
				</a>
			</div>
		</footer>
	);
}