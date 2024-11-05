import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    // fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    // color: Colors.accent500,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    // borderColor: Colors.accent500,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
