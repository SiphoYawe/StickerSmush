import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-icons";

type IconButtonProps = {
	icon: any;
	label: string;
	onPress: () => {};
};

const IconButton: React.FC<IconButtonProps> = ({ icon, label, onPress }) => {
	return (
		<Pressable style={styles.iconButton} onPress={onPress}>
			<MaterialIcons name={icon} size={24} color={"#fff"} />
			<Text style={styles.iconButtonLabel}>{label}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	iconButton: {
		justifyContent: "center",
		alignContent: "center",
	},
	iconButtonLabel: {
		color: "#fff",
		marginTop: 12,
	},
});

export default IconButton;
