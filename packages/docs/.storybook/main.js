/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
	stories: ['../src/pages/**/*.stories.mdx', '../src/stories/**/*.stories.tsx'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		autodocs: true,
	},
	viteFinal: (config, { configType }) => {
		if (configType === 'PRODUCTION') {
			config.base = '/design-system-ui/';
		}

		return config;
	},
};
export default config;
