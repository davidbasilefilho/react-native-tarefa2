import {
    Pressable,
    StyleSheet,
    Text,
    TextStyle,
    ViewStyle,
} from "react-native";

export function BrandButton({
    brand,
    buttonStyle,
    textStyle,
}: BrandButtonProps): JSX.Element {
    return (
        <Pressable style={buttonStyle} onPress={brand.switchFunc}>
            <Text style={textStyle}>{brand.title}</Text>
        </Pressable>
    );
}

export type Brand = {
    id: string;
    title: string;
    switchFunc: () => void;
};

export type BrandButtonProps = {
    brand: Brand;
    buttonStyle: ViewStyle;
    textStyle: TextStyle;
};
