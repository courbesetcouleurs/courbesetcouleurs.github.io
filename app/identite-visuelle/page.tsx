import type { Metadata } from "next";
import { ServicePage, serviceContents } from "../service-page";
export const metadata: Metadata = { title: "Création d’identité visuelle en Ariège", description: "Création et refonte d’identité visuelle en Ariège et à distance : logos, palette, typographies, univers graphique, charte et fichiers professionnels.", alternates:{canonical:"/identite-visuelle"}, openGraph:{title:"Création d’identité visuelle en Ariège",description:"Une identité visuelle stratégique, singulière et facile à faire vivre.",url:"/identite-visuelle",images:[{url:"/portfolio/maison-venus-hero.webp",alt:"Création d’identité visuelle Maison Vénus"}]} };
export default function Page(){return <ServicePage service={serviceContents["identite-visuelle"]}/>}
