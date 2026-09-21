export const CONFIG = {
	site: {
		url: 'https://mraffiramdhani.dev',
		locale: 'en_US',
		twitterHandle: '',
	},

	seo: {
		titleTemplate: '%s | %n',
		twitterCard: 'summary_large_image' as const,
		robots: 'index, follow',
	},

	typography: {
		baseFontSize: 115,
	},

	blog: {
		postsPerPage: 5,
	},

	theme: {
		radius: '0.75rem',

		light: {
			background: 'oklch(0.985 0.008 230)',
			foreground: 'oklch(0.22 0.03 250)',
			card: 'oklch(0.995 0.004 230)',
			cardForeground: 'oklch(0.22 0.03 250)',
			popover: 'oklch(0.995 0.004 230)',
			popoverForeground: 'oklch(0.22 0.03 250)',
			primary: 'oklch(0.44 0.09 195)',
			primaryForeground: 'oklch(0.99 0.01 195)',
			secondary: 'oklch(0.955 0.016 220)',
			secondaryForeground: 'oklch(0.25 0.03 250)',
			muted: 'oklch(0.96 0.012 220)',
			mutedForeground: 'oklch(0.48 0.025 250)',
			accent: 'oklch(0.94 0.03 195)',
			accentForeground: 'oklch(0.28 0.05 195)',
			destructive: 'oklch(0.577 0.245 27.325)',
			border: 'oklch(0.90 0.016 230)',
			input: 'oklch(0.90 0.016 230)',
			ring: 'oklch(0.44 0.09 195)',
		},

		dark: {
			background: 'oklch(0.175 0.022 250)',
			foreground: 'oklch(0.97 0.01 230)',
			card: 'oklch(0.215 0.024 250)',
			cardForeground: 'oklch(0.97 0.01 230)',
			popover: 'oklch(0.215 0.024 250)',
			popoverForeground: 'oklch(0.97 0.01 230)',
			primary: 'oklch(0.78 0.09 185)',
			primaryForeground: 'oklch(0.18 0.03 250)',
			secondary: 'oklch(0.26 0.025 250)',
			secondaryForeground: 'oklch(0.97 0.01 230)',
			muted: 'oklch(0.26 0.022 250)',
			mutedForeground: 'oklch(0.72 0.02 230)',
			accent: 'oklch(0.28 0.04 195)',
			accentForeground: 'oklch(0.9 0.04 185)',
			destructive: 'oklch(0.704 0.191 22.216)',
			border: 'oklch(0.92 0.02 230 / 14%)',
			input: 'oklch(0.92 0.02 230 / 16%)',
			ring: 'oklch(0.78 0.09 185)',
		},
	},
} as const;
