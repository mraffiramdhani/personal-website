import { Icons } from "@/components/icons";
import { Typescript } from "@/components/ui/svgs/typescript";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { House, Library } from "lucide-react";

export const DATA = {
	name: "Mochhamad Raffi Ramdhani",
	shortName: "Raffi",
	initials: "RR",
	role: "Software Engineer",
	seoTitle: "Raffi Ramdhani — Software Engineer in Jakarta",
	url: "https://mraffiramdhani.dev",
	location: "Gandaria, Kebayoran Lama, Jakarta Selatan",
	locationLink:
		"https://www.google.com/maps/search/?api=1&query=Gandaria+Kebayoran+Lama+Jakarta+Selatan",
	description:
		"Mid-level software engineer in Jakarta. JavaScript and TypeScript across React, React Native, and NestJS — including systems serving 90k+ monthly active users.",
	summary:
		"I'm a mid-level software engineer with 5+ years shipping web and mobile products in JavaScript and TypeScript. I work across React and React Native front ends and NestJS APIs, with the most depth in product-facing CRM and customer apps, data-heavy APIs, and end-to-end feature ownership with product and client teams.\n\nAt [Infomedia Nusantara](/#work) I help run and evolve Omnix CRM and related services used by 90k+ monthly active users, contribute to the Sobat IndiHome React Native app, and build livechat used by government and banking clients. Before that I shipped the Surplus food-rescue app to Google Play and the App Store.\n\nBased in Jakarta Selatan, and open to **Jakarta-first** and **remote Indonesia** roles.",
	avatarUrl: "",
	ogImage: "/og_image.png",
	sections: {
		about: { order: 1, enabled: true, heading: "About" },
		work: {
			order: 2,
			enabled: true,
			heading: "Experience",
			presentLabel: "Present",
		},
		education: { order: 3, enabled: true, heading: "Education" },
		skills: { order: 4, enabled: true, heading: "Skills" },
		projects: {
			order: 5,
			enabled: false,
			label: "Selected work",
			heading: "Selected work",
			text: "Product work lives in the experience section above.",
		},
		photos: {
			order: 6,
			enabled: false,
			heading: "Photos",
		},
		hackathons: {
			order: 7,
			enabled: false,
			label: "Hackathons",
			heading: "Hackathons",
			text: "Add hackathon entries in src/data/resume.tsx and enable this section.",
		},
		contact: {
			order: 8,
			enabled: true,
			label: "Contact",
			heading: "Let's talk",
			text: "Open to mid-level JavaScript and TypeScript roles in Jakarta and remote Indonesia. Email is the fastest way to reach me.",
		},
	},
	photos: [],
	skills: [
		{ name: "TypeScript", icon: Typescript },
		{ name: "JavaScript", icon: Icons.javascript },
		{ name: "React", icon: ReactLight },
		{ name: "React Native", icon: ReactLight },
		{ name: "NestJS", icon: Icons.nestjs },
		{ name: "REST APIs", icon: null },
		{ name: "SQL", icon: null },
		{ name: "CRM", icon: null },
		{ name: "Livechat", icon: null },
	],
	navbar: [
		{ href: "/", icon: House, label: "Home" },
		{ href: "/blog", icon: Library, label: "Blog" },
	],
	contact: {
		email: "moch.raffi.ramdhani@gmail.com",
		phone: "+62 898-708-7437",
		phoneHref: "tel:+628987087437",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/mraffiramdhani",
				icon: Icons.github,
				navbar: true,
			},
			email: {
				name: "Email",
				url: "mailto:moch.raffi.ramdhani@gmail.com",
				icon: Icons.email,
				navbar: true,
			},
		},
	},
	work: [
		{
			company: "Infomedia Nusantara",
			href: "",
			location: "South Jakarta",
			title: "IT Developer",
			logoUrl: "",
			start: "Aug 2022",
			end: undefined,
			description:
				"Help run and evolve products serving 90k+ monthly active users, including Omnix CRM and related customer-facing services.\n\n- Own on-demand feature work and client-driven changes for Omnix CRM (web); JavaScript stack with TypeScript adopted in v2.\n- Design and ship NestJS APIs, plus database queries and data-filtering logic for product and client needs.\n- Partner with product on ongoing Omnix improvements beyond one-off client requests.\n- Contribute to the Sobat IndiHome React Native app with the mobile team.\n- Build and maintain livechat services used by government and banking clients.",
		},
		{
			company: "Surplus Indonesia",
			href: "",
			location: "South Jakarta",
			title: "Front-End Developer",
			logoUrl: "",
			start: "Mar 2020",
			end: "Aug 2022",
			description:
				"Built and shipped the Surplus food-rescue app in React Native to Google Play and the App Store.\n\n- Rewrote the app to improve readability and performance.\n- Implemented new features, refactored existing flows, and evaluated tech choices for upcoming work.",
		},
		{
			company: "Earlier roles",
			href: "",
			location: "Bandung",
			title: "Intern & freelance web developer",
			logoUrl: "",
			start: "2018",
			end: "2018",
			description:
				"Intern Front-End Developer at PT. Solusi Teknis (Bandung), January–March 2018. Freelance web work for Azana Hotel & Resort, Nutrilite, and Zona Express.",
		},
	],
	education: [
		{
			school: "Universitas Terbuka",
			href: "https://www.ut.ac.id/",
			degree: "Bachelor of Computer Science · GPA 3.8",
			logoUrl: "",
			start: "2025",
			end: "Present",
		},
		{
			school: "Arkademy Fazztrack",
			href: "",
			degree: "Bootcamp",
			logoUrl: "",
			start: "Dec 2019",
			end: "Dec 2019",
		},
		{
			school: "SMKN 1 Katapang",
			href: "",
			degree: "Computer Science",
			logoUrl: "",
			start: "2019",
			end: "2019",
		},
	],
	projects: [],
	hackathons: [],
} as const;
