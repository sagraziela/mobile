import { Text, ColorValue, View } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

interface DuoCardProps {
    label: string,
    value: string,
    colorValue?: ColorValue,
}

export function DuoInfo({ label, value, colorValue = THEME.COLORS.TEXT }: DuoCardProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>  
        {label}
        </Text>

        <Text 
        style={[styles.label, {color: colorValue}]}
        numberOfLines={1}>  
        {value}
        </Text>

    </View>
  );
}