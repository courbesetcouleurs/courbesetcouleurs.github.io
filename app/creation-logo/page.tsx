import type { Metadata } from "next";
import { ServicePage, serviceContents } from "../service-page";
export const metadata: Metadata = { title: "Création de logo sur-mesure en Ariège", description: "Création et refonte de logo sur-mesure pour indépendants, artisans et petites entreprises en Ariège, Occitanie et à distance.", alternates:{canonical:"/creation-logo"}, openGraph:{title:"Création de logo sur-mesure en Ariège",description:"Un logo distinctif, lisible et professionnel, conçu pour durer.",url:"/creation-logo",images:[{url:"/portfolio/tomme-sommets-hero.webp",alt:"Création du logo Tomme & Sommets"}]} };
export default function Page(){return <ServicePage service={serviceContents["creation-logo"]}/>}
