import { Image, ImageProps, StyleSheet } from "react-native";

type ImageViewerProps = {
	placeholderImageSource: ImageProps;
	selectedImage: any;
};

const ImageViewer: React.FC<ImageViewerProps> = ({
	placeholderImageSource,
	selectedImage,
}) => {
	const imageSource = selectedImage
		? { uri: selectedImage }
		: placeholderImageSource;
	return <Image style={styles.image} source={imageSource}></Image>;
};

const styles = StyleSheet.create({
	image: {
		width: 330,
		height: 440,
		borderRadius: 18,
	},
});

export default ImageViewer;
