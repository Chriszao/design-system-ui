import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '@design-system-ui/react';

export default {
	title: 'Typography/Text',
	component: Text,
	args: {
		children:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ipsum voluptates nobis beatae autem corporis eligendi aspernatur cum id placeat dignissimos quis natus, quo laborum! Ratione eos odio soluta earum!',
	},
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
	args: {
		children: 'Strong Text',
		as: 'strong',
	},
};
