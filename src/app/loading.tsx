export default function Loading() {
   const circledText = "–LOADING".toUpperCase();

   return (
      <main className="flex min-h-page scale-75 items-center justify-center sm:scale-100">
         <section className="flex size-[17rem] items-center justify-center rounded-full border-2 border-muted">
            <div className="relative flex h-60 w-60 items-center justify-center rounded-full">
               <div className="absolute flex h-32 w-32 items-center justify-center rounded-full font-recoleta text-8xl">A</div>
               <div className="absolute h-full w-full animate-logo">
                  <p>
                     {circledText.split("").map((character, idx) => (
                        <span
                           style={{ transform: `rotate(${idx * 45}deg)` }}
                           className="absolute left-1/2 origin-[0_120px] text-xl"
                           key={`character-${idx + 1}`}
                        >
                           {character}
                        </span>
                     ))}
                  </p>
               </div>
            </div>
         </section>
      </main>
   );
}
