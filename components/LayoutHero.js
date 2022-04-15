import Link from "next/link";

export const LayoutHero = ({ 
  id, 
  cn_container="container", 
  title="Welcome", 
  cn_h1="py-5 text-left hero-title", 
  main_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consectetur eget id velit. Quis elit, duis malesuada donec. Quis consequat, ullamcorper id in purus lobortis scelerisque consectetur. Amet, sed ac blandit ultricies.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consectetur eget id velit. Quis elit, duis malesuada donec. Quis consequat, ullamcorper id in purus lobortis scelerisque consectetur. Amet, sed ac blandit ultricies.",
  cn_lorem="text-left",
  children,
  cn_cta_div="text-left mt-10 cursor-pointer",
  href="/",
  cn_cta="btn py-2 px-4",
  cta_text=""
}) => {
  return (
		<div className="container px-5 w-full h-full">
			<hr className="hr-hero" />
			<div className={cn_container} id={id}>
				<h1 className={cn_h1}>{title}</h1>
				{cn_lorem && cn_lorem !== "no" ? (
					<p className={cn_lorem}>{main_text}</p>
				) : null}
				{cta_text ? (
					<div className={cn_cta_div}>
						<Link href={href}>
							<span className={cn_cta}>{cta_text}</span>
						</Link>
					</div>
				) : null}
				{children}
			</div>
		</div>
	);
}