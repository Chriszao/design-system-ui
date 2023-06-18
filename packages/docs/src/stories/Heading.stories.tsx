import type { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from '@design-system-ui/react';

export default {
	title: 'Typography/Heading',
	component: Heading,
	args: {
		children: 'Custom Title',
	},
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
	args: {
		children: 'H1 Heading',
		as: 'h1',
	},
	parameters: {
		docs: {
			description: {
				story:
					'By default heading will always be a `h2`. But this can be changed with the `as` property.',
			},
		},
	},
};
