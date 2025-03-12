import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
});

export default function ExampleStackPage() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>This is an "app"-owned stacked page.</ThemedText>
      <ThemedText>
        It should always load fine if accessed manually by its URL.
      </ThemedText>
    </ThemedView>
  );
}
