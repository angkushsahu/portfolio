import { educationArr } from "./data";

export default function Education() {
   return (
      <section className="py-16 pt-0 sm:pt-16 md:pt-32">
         <h1>Education</h1>
         <div className="mt-8 grid gap-8 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {educationArr.map(({ course, duration, institute }, idx) => (
               <article key={course} className="border border-box-border bg-box-color p-6 hover:border-gray-600">
                  <div>
                     <span className="font-recoleta text-4xl font-semibold tracking-widest text-muted-foreground/25">
                        0{idx + 1}
                     </span>
                  </div>
                  <div className="mt-3 space-y-1 text-right">
                     <p className="font-recoleta text-2xl">{course}</p>
                     <p className="text-muted-foreground">{institute}</p>
                     <p className="text-muted-foreground">{duration}</p>
                  </div>
               </article>
            ))}
         </div>
      </section>
   );
}
