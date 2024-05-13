import { View, Image, ImageSourcePropType } from "react-native";

type EmojiStickerProps = {
	imageSize: number;
	stickerSource: any;
};

const EmojiSticker: React.FC<EmojiStickerProps> = ({
	imageSize,
	stickerSource,
}) => {
	return (
		<View style={{ top: -350 }}>
			<Image
				source={stickerSource}
				resizeMode="contain"
				style={{ width: imageSize, height: imageSize }}
			/>
		</View>
	);
};

export default EmojiSticker;
