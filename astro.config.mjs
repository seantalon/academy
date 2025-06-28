// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	server: {
		host: true,
		allowedHosts: ['academy.avaren.dev']  // Add your tunnel domain
	},
	integrations: [
		starlight({
			title: 'My DnD Academia',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
						{
							label: 'Raids', items: [{
								label: 'Liberation of Undermine',
								autogenerate: { directory: 'undermine' },
							},
						{
								label: 'MANAFORGE THINGY',
								autogenerate: { directory: 'manaforge' },
							}],
						},

					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},


			],
		}),
	],
});
