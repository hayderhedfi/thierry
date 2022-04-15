/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import { Menu, Transition } from "@headlessui/react";
import burger from "../public/white_burger.svg";
import fr from "../public/france.png";
import uk from "../public/uk.png";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export const DDown = ({ navItem }) => {
	const { locale, locales, defaultLocale, asPath } = useRouter();
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
	const mobileNavRef = useRef(null);
	return (
		<Fragment>
			<div
				className="cursor-pointer flex justify-center items-center"
				onClick={() => setIsMobileNavOpen(true)}>
				<Image
					src={burger}
					alt="menu burger"
					aria-hidden="true"
					width="60"
					heigh="40"
				/>
			</div>
			<Transition as={Fragment} show={isMobileNavOpen}>
				<div
					onClick={() => setIsMobileNavOpen(false)}
					className="fixed h-full w-full top-0 left-0 bg-black/30 z-50 ">
					<Transition.Child
						enter="transition ease-in-out transform duration-300"
						enterFrom="translate-x-full"
						enterTo="translate-x-0"
						leave="transition ease-in-out transform duration-300"
						leaveFrom="translate-x-0"
						leaveTo="translate-x-full"
						as={Fragment}>
						<div
							ref={mobileNavRef}
							className="w-60 sm:w-72 ml-auto h-full bg-gray-50 shadow p-4 text-gray-900 divide-y divide-solid divide-black ">
							{navItem
								? navItem.map((item, i) => {
										return (
											<div key={i}>
												{
													<Link href={item.path} passHref>
														<div
															className={
																"p-3  cursor-pointer text-center text-sm md:text-lg font-bold"
															}>
															{item.name}
														</div>
													</Link>
												}
											</div>
										);
								  })
								: null}
							<Link
								activeClassName={locale === "en-US"}
								href={asPath}
								locale="en-US">
								<span
									className={classNames(
										"flex p-3 justify-center cursor-pointer"
									)}>
									<Image src={uk} alt="english" width="40" height="40" />
								</span>
							</Link>
							<Link
								activeClassName={locale === "fr-FR "}
								href={asPath}
								locale="fr-FR">
								<span
									className={classNames(
										"flex p-3 justify-center cursor-pointer"
									)}>
									<Image src={fr} alt="french" width="40" height="40" />
								</span>
							</Link>
						</div>
					</Transition.Child>
				</div>
			</Transition>
		</Fragment>
	);
};
