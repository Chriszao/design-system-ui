import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '@design-system-ui/react';

export default {
	title: 'Typography/Text',
	component: Text,
	args: {
		children:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ipsum voluptates nobis beatae autem corporis eligendi aspernatur cum id placeat dignissimos quis natus, quo laborum! Ratione eos odio soluta earum!',
		size: 'md',
	},
	argTypes: {
		size: {
			options: [
				'xxs',
				'xs',
				'sm',
				'md',
				'lg',
				'xl',
				'2xl',
				'4xl',
				'5xl',
				'6xl',
				'7xl',
				'8xl',
				'9xl',
			],
			control: {
				type: 'inline-radio',
			},
		},
	},
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
	args: {
		children: 'Strong Text',
		as: 'strong',
	},
};
