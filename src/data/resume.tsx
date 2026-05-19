import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";

export const DATA = {
	name: "Mochhamad Raffi Ramdhani",
	initials: "R",
	url: "https://example.com",
	location: "",
	locationLink: "",
	description: "Personal website and blog.",
	summary:
		"Add a short bio here. You can use [markdown links](/#contact) to point to other sections on this page.",
	avatarUrl: "",
	ogImage: "/favicon.svg",
	sections: {
		about: { order: 1, enabled: true, heading: "About" },
		work: {
			order: 2,
			enabled: false,
			heading: "Work Experience",
			presentLabel: "Present",
		},
		education: { order: 3, enabled: false, heading: "Education" },
		skills: { order: 4, enabled: false, heading: "Skills" },
		projects: {
			order: 5,
			enabled: false,
			label: "My Projects",
			heading: "Check out my latest work",
			text: "Add a short intro for your projects section.",
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
			heading: "Get in Touch",
			text: "Reach out via email or the social links in your site config.",
		},
	},
	photos: [],
	skills: [],
	navbar: [
		{ href: "/", icon: House, label: "Home" },
		{ href: "/blog", icon: Library, label: "Blog" },
	],
	contact: {
		email: "you@example.com",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/yourusername",
				icon: Icons.github,
				navbar: false,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://linkedin.com/in/yourusername",
				icon: Icons.linkedin,
				navbar: false,
			},
			email: {
				name: "Send Email",
				url: "mailto:you@example.com",
				icon: Icons.email,
				navbar: false,
			},
		},
	},
	work: [],
	education: [],
	projects: [],
	hackathons: [],
} as const;
