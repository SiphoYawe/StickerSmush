import { View, Pressable, Text, StyleSheet } from "react-native";
import { Images } from "lucide-react-native";

type ButtonProps = {
	label: string;
	theme?: "primary" | "secondary";
	icon?: any;
	onpress?: () => any;
};

const Button: React.FC<ButtonProps> = ({ label, theme, onpress }) => {
	if (theme === "primary") {
		return (
			<View style={[styles.buttonContainer, { borderRadius: 18 }]}>
				<Pressable
					style={[styles.button, { backgroundColor: "#fff" }, { gap: 6 }]}
					onPress={onpress}>
					<Images size={22} color={"#25292e"} style={styles.buttonIcon} />
					<Text style={[styles.buttonLabel, { color: "#25292e" }]}>
						{label}
					</Text>
				</Pressable>
			</View>
		);
	}

	return (
		<View style={styles.buttonContainer}>
			<Pressable style={styles.button} onPress={onpress}>
				<Text style={styles.buttonLabel}>{label}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		width: 320,
		height: 68,
		marginHorizontal: 20,
		alignItems: "center",
		justifyContent: "center",
		padding: 3,
	},
	button: {
		borderRadius: 10,
		width: "100%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	buttonIcon: {
		paddingRight: 8,
	},
	buttonLabel: {
		color: "#fff",
		fontSize: 18,
	},
});

export default Button;
