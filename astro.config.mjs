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
			title: 'DnD Academy',
			head: [
				// WowHead tooltip configuration
				{
					tag: 'script',
					content: `
            const whTooltips = {
              colorLinks: false,
              iconizeLinks: false,
              renameLinks: true
            };
          `
				},
				// WowHead tooltip script
				{
					tag: 'script',
					attrs: {
						src: 'https://wow.zamimg.com/js/tooltips.js'
					}
				}
			],
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
						{ label: 'Contribution', autogenerate: { directory: 'guides/contribution' } },
						{
							label: 'Raids', items: [{
								label: 'Liberation of Undermine',
								autogenerate: { directory: 'undermine' },
							},
							{
								label: 'Manforge Omega',
								badge: 'new',
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
