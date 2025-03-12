import { Text, Image, StyleSheet, Pressable, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router, useLocalSearchParams } from "expo-router";

export default function HomeScreen() {
  const { "#": hash } = useLocalSearchParams();

  const hasHash = hash !== undefined;
  console.log("hasHash", hasHash);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hi devs - expo-router hash repro</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1</ThemedText>
        <ThemedText>
          Click on the button below to add a hash to the route.
        </ThemedText>

        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => {
              if (hasHash) {
                // We can't remove the hash using setParams with undefined on "#"
                // See https://github.com/expo/expo/pull/34950

                router.replace("/");
              } else {
                router.setParams({
                  "#": "test",
                });
              }
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              {hasHash ? "Remove hash" : "Add hash"}
            </Text>
          </Pressable>

          <ThemedText style={styles.btnTextNotice}>
            {hasHash ? `✅ #${hash}` : "👈"}
          </ThemedText>
        </View>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2</ThemedText>
        <ThemedText>
          Click on the button below to navigate to the "app"-owned stacked page.
        </ThemedText>

        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => {
              router.push("/stack");
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Navigate to parent-owned stacked page
            </Text>
          </Pressable>
          <ThemedText style={styles.btnTextNotice}>
            {hasHash ? `Will trigger error` : "Will load fine"}
          </ThemedText>
        </View>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3</ThemedText>
        <ThemedText>
          If a hash was added, the error overlay should report the following:
        </ThemedText>
        <ThemedText type="defaultSemiBold">
          property "#" is non-configurable and can't be deleted
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  button: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 12,
    backgroundColor: "#2020EE",
    borderWidth: 2,
    borderColor: "#6040FF",
  },
  buttonText: {
    color: "#FFFFFF",
  },
  btnTextNotice: {
    opacity: 0.8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
