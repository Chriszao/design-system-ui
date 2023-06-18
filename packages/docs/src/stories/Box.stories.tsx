import type { Meta, StoryObj } from '@storybook/react';
import { Box, BoxProps } from '@design-system-ui/react';

export default {
	title: 'Box',
	component: Box,
	args: {
		children: (
			<>
				<span>Testando o elemento Box</span>
			</>
		),
	},
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};