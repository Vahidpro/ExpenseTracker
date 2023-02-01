import { StyleSheet, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Ionicons from "@expo/vector-icons/Ionicons";

function IconButton({ icon, size, color, onPress }) {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => pressed && styles.pressed}
		>
			<View style={styles.buttonContainer}>
				<Ionicons name={icon} color={color} size={size}></Ionicons>
			</View>
		</Pressable>
	);
}
export default IconButton;

const styles = StyleSheet.create({
	buttonContainer: {
		padding: 6,
		marginHorizontal: 8,
		marginVertical: 2,
		borderRadius: 24,
	},
	pressed: {
		opacity: 0.75,
	},
});
