import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View, Pressable, StyleSheet } from "react-native";

type CircleButtonProps = {
	onPress: () => void;
};

const CircleButton: React.FC<CircleButtonProps> = ({ onPress }) => {
	return (
		<View style={styles.CircleButtonContainer}>
			<Pressable style={styles.CircleButton} onPress={onPress}>
				<MaterialIcons name="add" size={38} color="#25292e" />
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	CircleButtonContainer: {
		width: 84,
		height: 84,
		marginHorizontal: 60,
		borderWidth: 4,
		borderColor: "#ffd33d",
		borderRadius: 42,
		padding: 3,
	},
	CircleButton: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 42,
		backgroundColor: "#fff",
	},
});

export default CircleButton;
