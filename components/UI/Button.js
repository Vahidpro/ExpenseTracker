import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

function Button({ children, onPress, mode, style }) {
	return (
		<View style={style}>
			<Pressable
				style={({ pressed }) => pressed && styles.pressed}
				onPress={onPress}
			>
				<View style={[styles.button, mode === "flat" && styles.flat]}>
					<Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
						{children}
					</Text>
				</View>
			</Pressable>
		</View>
	);
}
export default Button;

const styles = StyleSheet.create({
	button: {
		borderRadius: 4,
		padding: 4,
		backgroundColor: GlobalStyles.colors.primary500,
	},
	flat: { backgroundColor: "transparent" },
	buttonText: {
		color: "white",
		textAlign: "center",
	},
	flatText: { backgroundColor: GlobalStyles.colors.primary200 },
	pressed: {
		opacity: 0.75,
		backgroundColor: GlobalStyles.colors.primary100,
		borderRadius: 6,
	},
});
