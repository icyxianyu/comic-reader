import {
  StyleSheet
} from "react-native";

import {
  COLORS,
  FONT,
  SHADOWS,
  SIZES
} from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 200,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  logoImage: {
    width: "100%",
    resizeMode: "contain",
  },
  authorName: {
    fontSize: SIZES.medium,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  title: {
    fontSize: SIZES.large,
    color: COLORS.black,
    fontWeight: "bold",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: SIZES.small,
  },
  tag: {
    fontSize: SIZES.xxSmall / 3,
    color: COLORS.gray2,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    padding: SIZES.small / 3,
    marginRight: SIZES.small / 2,
  },
  add: {
    lineHeight: (SIZES.xxSmall * 4)
  }
});

export default styles;