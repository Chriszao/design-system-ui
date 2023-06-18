import { Avatar, AvatarProps } from '@design-system-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Data display/Avatar',
	component: Avatar,
	args: {
		src: 'https://github.com/Chriszao.png',
		alt: 'Christofer Assis',
	},
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
	args: {
		src: undefined,
	},
};
