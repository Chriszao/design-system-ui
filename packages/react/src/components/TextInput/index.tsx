import { ComponentProps, ElementRef, forwardRef } from 'react';
import { Input, Prefix, TextInputContainer } from './styles';

type TextInputSize = Pick<
	ComponentProps<typeof TextInputContainer>,
	'size'
>['size'];

type InputPropsWithoutSize = Omit<ComponentProps<typeof Input>, 'size'>;

export interface TextInputProps extends InputPropsWithoutSize {
	prefix?: string;
	size?: TextInputSize;
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
	({ prefix, size, ...props }, ref) => {
		return (
			<TextInputContainer size={size}>
				{!!prefix && <Prefix>{prefix}</Prefix>}
				<Input ref={ref} {...props} />
			</TextInputContainer>
		);
	},
);

TextInput.displayName = 'TextInput';
