import { Button, ButtonProps } from '@design-system-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Form/Button',
	component: Button,
	args: { children: 'Send' },
	argTypes: {
		onClick: {
			action: 'click',
		},
	},
} as Meta<ButtonProps>;
import { ArrowRight } from 'phosphor-react';

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
	args: {
		variant: 'secondary',
		children: 'Create new',
	},
};

export const Tertiary: StoryObj<ButtonProps> = {
	args: {
		variant: 'tertiary',
		children: 'Cancel',
	},
};

export const Small: StoryObj<ButtonProps> = {
	args: {
		size: 'sm',
	},
};

export const Disabled: StoryObj<ButtonProps> = {
	args: {
		disabled: true,
	},
};

export const WithIcon: StoryObj<ButtonProps> = {
	args: {
		children: (
			<>
				Next Step
				<ArrowRight weight="bold" />
			</>
		),
	},
};
