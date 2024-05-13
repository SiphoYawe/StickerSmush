import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type IconButtonProps = {
	icon: any;
	label: string;
	onPress: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({ icon, label, onPress }) => {
	return (
		<Pressable style={styles.iconButton} onPress={onPress}>
			<MaterialIcons name={icon} size={30} color={"#fff"} />
			<Text style={styles.iconButtonLabel}>{label}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	iconButton: {
		justifyContent: "center",
		alignItems: "center",
	},
	iconButtonLabel: {
		color: "#fff",
		marginTop: 12,
		fontSize: 18,
	},
});

export default IconButton;
