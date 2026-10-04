import type { Metadata } from "next";
import { ServicePage, serviceContents } from "../service-page";
export const metadata: Metadata = { title: "Stratégie de marque en Ariège", description: "Positionnement, plateforme de marque, personnalité et messages pour construire une marque claire et différenciante en Ariège, Occitanie et à distance.", alternates:{canonical:"/strategie-de-marque"}, openGraph:{title:"Stratégie de marque en Ariège",description:"Clarifiez votre positionnement et donnez une direction solide à votre marque.",url:"/strategie-de-marque",images:[{url:"/portfolio/green-code-bureau-new.webp",alt:"Stratégie de marque Green Code Solutions"}]} };
export default function Page(){return <ServicePage service={serviceContents["strategie-de-marque"]}/>}
