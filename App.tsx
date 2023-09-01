import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Button, Text, View, Image, Pressable } from "react-native";
import { Brand, BrandButton } from "./src/components/BrandButton";
import Crypto from "expo-crypto";

export default function App(): JSX.Element {
    const [image, setImage] = useState(require("./assets/apple.png"));

    const trocarApple = (): void => {
        setImage(require("./assets/apple.png"));
    };

    const trocarAvon = (): void => {
        setImage(require("./assets/avon.png"));
    };

    const trocarFandangos = (): void => {
        setImage(require("./assets/fandangos.png"));
    };

    const trocarRuffles = (): void => {
        setImage(require("./assets/ruffles.png"));
    };

    const brands: Brand[] = [
        {
            id: Crypto.randomUUID(),
            title: "Apple",
            switchFunc: () => {
                setImage(require("./assets/apple.png"));
            },
        },
        {
            id: Crypto.randomUUID(),
            title: "Ruffles",
            switchFunc: () => {
                setImage(require("./assets/ruffles.png"));
            },
        },
        {
            id: Crypto.randomUUID(),
            title: "Avon",
            switchFunc: () => {
                setImage(require("./assets/avon.png"));
            },
        },
        {
            id: Crypto.randomUUID(),
            title: "Fandangos",
            switchFunc: () => {
                setImage(require("./assets/fandangos.png"));
            },
        },
    ];

    return (
        <View style={styles.main}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image}></Image>
            </View>

            <View style={styles.buttonContainer}>
                {brands.map((brand) => (
                    <BrandButton
                        brand={brand}
                        buttonStyle={styles.button}
                        textStyle={styles.buttonText}
                        key={brand.id}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#eff1f5",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    },

    text: {
        color: "#4c4f69",
    },

    buttonContainer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flex: 1,
        gap: 16,
    },

    imageContainer: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },

    image: {
        width: 192,
        height: 192,
        margin: "auto",
    },

    button: {
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#1e66f5",
    },

    buttonText: {
        color: "#eff1f5",
    },
});
