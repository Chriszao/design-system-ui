import { Box, CheckBox, CheckBoxProps, Text } from '@design-system-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Form/CheckBox',
	component: CheckBox,
	args: {},
	decorators: [
		(Story) => {
			return (
				<Box
					as="label"
					css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
				>
					{Story()}
					<Text size="sm">Accept terms of use</Text>
				</Box>
			);
		},
	],
} as Meta<CheckBoxProps>;

export const Primary: StoryObj<CheckBoxProps> = {};
