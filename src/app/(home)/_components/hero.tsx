import Link from "next/link";

import { buttonVariants, HeroLogo, Tooltip } from "@/components";
import { socialLinks } from "@/constants";
import { cn } from "@/lib";

export default function HeroSection() {
   return (
      <section className="relative -mt-24 overflow-hidden pt-24">
         <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 top-10 -z-10 rotate-12 scale-150 select-none text-center text-hero-bg font-bold leading-tight tracking-wide text-gray-900/40"
         >
            POSTGRES MONGODB MYSQL JAVASCRIPT JAVA RUST TYPESCRIPT C++ REACT NEXT NODE NEST EXPRESS POSTGRES MONGODB MYSQL
            JAVASCRIPT JAVA RUST TYPESCRIPT C++ REACT NEXT NODE NEST EXPRESS
         </span>
         <section className="center-layout flex flex-col items-center justify-between pb-24 pt-12 sm:pt-16 md:flex-row md:py-40">
            <div>
               <h1 className="text-center font-recoleta md:text-left">Angkush Sahu</h1>
               <h2 className="mt-4 text-center text-xl leading-tight tracking-widest text-muted-foreground sm:mt-6 sm:text-2xl md:text-left xl:text-4xl">
                  FULL STACK DEVELOPER
               </h2>
               <div className="mt-8 flex items-center justify-center gap-x-6 sm:mt-12 md:justify-start">
                  {socialLinks.map(({ Icon, href, title }, idx) => (
                     <Tooltip key={`Hero Icon ${idx + 1}`} tooltip={title} className="rounded-full">
                        <Link
                           key={href}
                           href={href}
                           target="_blank"
                           rel="noopener noreferrer"
                           className={cn(
                              buttonVariants({
                                 className: "size-12 rounded-full bg-transparent p-3",
                                 variant: "outline",
                              })
                           )}
                        >
                           <Icon className="size-5 text-white" />
                        </Link>
                     </Tooltip>
                  ))}
               </div>
            </div>
            <div className="-order-1 flex h-52 items-center justify-center md:order-none md:h-auto">
               <HeroLogo className="scale-[0.6] md:scale-75 lg:scale-100" />
            </div>
         </section>
      </section>
   );
}
// export default function HeroSection() {
// 	return (
// 		<section className="bg-orange-500 center-layout py-32 pt-10 sm:pt-16 md:pt-32 flex flex-col md:flex-row items-center justify-between">
// 			<div>
// 				<h1 className="font-recoleta text-center md:text-left">Angkush Sahu</h1>
// 				<h2 className="text-muted-foreground tracking-widest mt-4 sm:mt-6 text-center md:text-left leading-tight text-xl sm:text-2xl xl:text-4xl">
// 					FULL STACK DEVELOPER
// 				</h2>
// 				<div className="mt-8 sm:mt-12 flex items-center justify-center md:justify-start gap-x-6">
// 					{socialLinks.map(({ Icon, href, title }, idx) => (
// 						<CustomTooltip key={`Hero Icon ${idx + 1}`} tooltip={title} className="rounded-full">
// 							<Link
// 								key={href}
// 								href={href}
// 								target="_blank"
// 								rel="noopener noreferrer"
// 								className={cn(
// 									buttonVariants({
// 										className: "bg-transparent rounded-full size-12 p-3",
// 										variant: "outline",
// 									}),
// 								)}
// 							>
// 								<Icon className="text-white size-5" />
// 							</Link>
// 						</CustomTooltip>
// 					))}
// 				</div>
// 			</div>
// 			<div className="-order-1 md:order-none flex items-center justify-center h-52 md:h-auto">
// 				<HeroLogo className="scale-[0.6] md:scale-75 lg:scale-100" />
// 			</div>
// 		</section>
// 	);
// }
