import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Button, View, Image } from "react-native";

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

    return (
        <View style={styles.main}>
            <View style={styles.imageContainer}>
                <Image
                    source={image}
                    style={{ width: "15rem", height: "15rem", margin: "auto" }}
                ></Image>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Apple" onPress={trocarApple} />
                <Button title="Avon" onPress={trocarAvon} />
                <Button title="Fandangos" onPress={trocarFandangos} />
                <Button title="Ruffles" onPress={trocarRuffles} />
                <StatusBar style="auto" />
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
        alignitems: "center",
        justifyContent: "center",
        width: "85%",
    },
});
