import type { Meta, StoryObj } from '@storybook/react';
import { Box, BoxProps, Text } from '@design-system-ui/react';

export default {
	title: 'Box',
	component: Box,
	args: {
		children: (
			<>
				<Text>Testing Box Element</Text>
			</>
		),
	},
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
