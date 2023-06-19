import { styled } from '../../styles';

export const TextInputContainer = styled('div', {
	backgroundColor: '$gray900',
	borderRadius: '$sm',
	boxSizing: 'border-box',
	border: '2px solid $gray900',
	display: 'flex',
	alignItems: 'center',

	variants: {
		size: {
			sm: {
				padding: '$2 $3',
			},
			md: {
				padding: '$3 $4',
			},
		},
	},

	'&:has(input:focus)': {
		borderColor: '$green300',
	},

	'&:has(input:disabled)': {
		opacity: 0.5,
		cursor: 'not-allowed',
	},

	defaultVariants: {
		size: 'md',
	},
});

export const Prefix = styled('span', {
	fontFamily: '$default',
	fontSize: 'small',
	color: '$gray400',
	fontWeight: '$regular',
});

export const Input = styled('input', {
	fontFamily: '$default',
	fontSize: 'small',
	fontWeight: '$regular',
	color: '$white',
	background: 'transparent',
	border: 'none',
	width: '100%',

	'&:focus': {
		outline: 'none',
	},

	'&:disabled': {
		cursor: 'not-allowed',
	},

	'&::placeholder': {
		color: '$gray400',
	},
});
