import Link from "next/link";
import Image from "next/image";

import { MediaBadge } from "./MediaBadge";
// import { ConnectMetamask } from './Metamask';
import logo from "../public/logo.svg";

export const NavHeader = ({ routes, children }) => {
	return (
		<div className="header lg:py-4 flex justify-between w-full">
			<div className="flex">
				<div className="hidden lg:flex lg:items-center">
					{routes.map((r, i) => {
						return (
							<Link key={i} href={r.path}>
								<a className="pr-10 font-bold fs-20"> {r.name} </a>
							</Link>
						);
					})}
				</div>
			</div>
			<div className="flex">
				<MediaBadge />
				{/* <ConnectMetamask /> */}
				{children}
			</div>
		</div>
	);
};
