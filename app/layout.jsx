import "./globals.css";
import {DM_Sans,Space_Grotesk} from "next/font/google";
const dm=DM_Sans({subsets:["latin"],variable:"--font-dm",display:"swap"});const space=Space_Grotesk({subsets:["latin"],variable:"--font-space",display:"swap"});
export const metadata={title:"Baljit Singh — Frontend Engineer",description:"Baljit Singh is a frontend engineer with 5+ years of experience in React, Next.js and TypeScript.",openGraph:{title:"Baljit Singh — Frontend Engineer",description:"Interactive, accessible and performant web experiences.",type:"website"},robots:{index:true,follow:true}};
export const viewport={width:"device-width",initialScale:1,themeColor:"#09090e"};
export default function RootLayout({children}){return <html lang="en" className={dm.variable+" "+space.variable}><body>{children}</body></html>}
