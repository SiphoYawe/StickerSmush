import { View, StyleSheet } from "react-native";
import { useState } from "react";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";

const imagePlaceHolder = require("../assets/images/background-image.png");

export default function HomePaage() {
	const [selecetedImage, setSelecetedImage] = useState<string | null>(null);
	const [showAppOptions, setshowAppOptions] = useState<boolean>(false);

	const pickImageAsync = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1,
		});

		if (!result.canceled) {
			setSelecetedImage(result.assets[0].uri);
			setshowAppOptions(true);
		} else {
			alert("You did not select any image");
		}
	};
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<ImageViewer
					placeholderImageSource={imagePlaceHolder}
					selectedImage={selecetedImage}
				/>
			</View>
			{showAppOptions ? (
				<View />
			) : (
				<View style={styles.footerContainer}>
					<Button
						theme="primary"
						label="Choose a photo"
						onpress={pickImageAsync}
					/>
					<Button
						label="Use this photo"
						onpress={() => {
							setshowAppOptions(true);
						}}
					/>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#25292e",
		alignItems: "center",
	},
	imageContainer: {
		flex: 1,
		paddingTop: 58,
	},
	footerContainer: {
		flex: 1 / 3,
		alignItems: "center",
	},
});
