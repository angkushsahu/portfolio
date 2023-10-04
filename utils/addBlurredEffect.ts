import { getPlaiceholder } from "plaiceholder";
import type { IProjectData } from "./projectData";

async function getBase64(imageUrl: string) {
   try {
      const res = await fetch(imageUrl);
      if (!res.ok) throw new Error(`Failed to fetch image, Error ${res.status}: ${res.statusText}`);

      const buffer = await res.arrayBuffer();
      const { base64 } = await getPlaiceholder(Buffer.from(buffer));
      return base64;
   } catch (error: unknown) {
      if (error instanceof Error) console.log(error.stack);
   }
}

export default async function addBlurredEffects(projectData: Array<IProjectData>) {
   const base64Promises = projectData.map((project) => getBase64(project.image));
   const base64Results = await Promise.all(base64Promises);

   const projectsWithBlurredUrl: Array<IProjectData> = projectData.map((project, idx) => {
      project.blurredUrl = base64Results[idx];
      return project;
   });

   return projectsWithBlurredUrl;
}
