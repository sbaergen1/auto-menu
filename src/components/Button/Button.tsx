import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

interface IButtonProps extends TouchableOpacityProps {
    text: string,
    disabled?: boolean
}

export function Button(props: IButtonProps) {
    const { text, disabled, style, ...rest } = props;

    console.log("B", disabled)
    return <TouchableOpacity style={[styles.common, disabled && styles.disabled, style]} disabled={disabled} {...rest}>
        <Text>{text}</Text>
    </TouchableOpacity>
}