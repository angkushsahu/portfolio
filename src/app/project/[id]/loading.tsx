import { Skeleton } from "@/components";

export default function Loading() {
   return (
      <main className="center-layout py-8 pb-12 md:py-12">
         <Skeleton className="mb-6 h-20 max-w-[37.5rem]" />
         {Array.from({ length: 3 }).map((_, idx) => (
            <Skeleton key={`Loading Description ${idx + 1}`} className="my-2 h-8 w-full" />
         ))}
         <Skeleton className="mt-10 h-10 w-52" />
         <section className="flex flex-col gap-x-16 gap-y-10 pb-6 pt-16 lg:flex-row">
            <div>
               <Skeleton className="aspect-[19/10] w-full" />
               <div className="mt-10 flex flex-wrap gap-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                     <Skeleton key={`Loading Tech Bage ${idx + 1}`} className="h-8 w-28 rounded-full" />
                  ))}
               </div>
            </div>
            <div className="flex-1 lg:max-w-lg xl:max-w-2xl">
               <Skeleton className="mb-6 h-10 w-36 sm:mb-8" />
               <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, idx) => (
                     <div key={`Loading Feature Wrapper ${idx + 1}`}>
                        {Array.from({ length: 3 }).map((_, idx) => (
                           <Skeleton key={`Loading Feature ${idx + 1}`} className="my-2 h-6 w-full" />
                        ))}
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </main>
   );
}
