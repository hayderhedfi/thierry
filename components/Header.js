import { useRouter } from "next/router";
import { MediaBadge } from "../components/MediaBadge";
import { ConnectMetamask } from "../components/Metamask";
import { NavHeader } from "../components/NavHeader";
import { DDown } from "../components/Dropdown";
import Link from "next/link";
import Image from "next/image";

import fr from "../public/france.png";
import uk from "../public/uk.png";

import logo from "../public/logo.svg";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export const Header = () => {
	const textContent = {
		"en-US": {
			routes: [
				{
					name: "Concept",
					path: "#concept",
				},
				{
					name: "Artists",
					path: "#artist",
				},
				{
					name: "Roadmap",
					path: "#road",
				},
				{
					name: "Team",
					path: "#team",
				},
				{
					name: "FAQ",
					path: "#faq",
				},
			],
		},
		"fr-FR": {
			routes: [
				{
					name: "Concept",
					path: "#concept",
				},
				{
					name: "Artistes",
					path: "#artist",
				},
				{
					name: "Roadmap",
					path: "#road",
				},
				{
					name: "Team",
					path: "#team",
				},
				{
					name: "FAQ",
					path: "#faq",
				},
			],
		},
	};

	const { locale, locales, defaultLocale, asPath } = useRouter();
	const { routes } = textContent[locale];

	return (
		<header className="container header flex items-center justify-between px-16 py-4">
			{/* MOBILE */}
			<div className="">
				<Link href="/">
					<div className="cursor-pointer flex items-center">
						<Image src={logo} width="80" height="80" layout="fixed" />
					</div>
				</Link>
			</div>
			<div className="flex items-center xl:hidden">
				<DDown navItem={routes} />
			</div>

			{/* DESKTOP */}
			{/* Dropdown for languages */}
			<div className="hidden xl:flex w-full">
				<NavHeader routes={routes}>
					<div className="hidden xl:flex items-center">
						<div className="flag-media">
							<Link
								activeClassName={locale === "fr-FR "}
								href={asPath}
								locale="fr-FR">
								<span
									className={classNames(
										"flex justify-center p-1 cursor-pointer"
									)}>
									<Image src={fr} alt="french" />
								</span>
							</Link>
						</div>
						<div className="flag-media">
							<Link
								activeClassName={locale === "en-US"}
								href={asPath}
								locale="en-US">
								<span
									className={classNames(
										"flex justify-center p-1 cursor-pointer"
									)}>
									<Image src={uk} alt="english" />
								</span>
							</Link>
						</div>
					</div>
				</NavHeader>
			</div>
		</header>
	);
};

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}