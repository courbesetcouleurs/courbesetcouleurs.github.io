import type { Metadata } from "next";
import { ServicePage, serviceContents } from "../service-page";
export const metadata: Metadata = { title: "Webdesigner freelance en Ariège", description: "Web design et création de site vitrine responsive en Ariège : expérience utilisateur, direction artistique, intégration et fondations SEO.", alternates:{canonical:"/webdesign"}, openGraph:{title:"Webdesigner freelance en Ariège",description:"Un site clair, singulier et pensé pour transformer l’intérêt en contact.",url:"/webdesign",images:[{url:"/portfolio/green-code-web.webp",alt:"Web design par Courbes & Couleurs"}]} };
export default function Page(){return <ServicePage service={serviceContents.webdesign}/>}
