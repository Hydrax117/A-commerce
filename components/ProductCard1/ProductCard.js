import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { colors, network } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

const ProductCard1 = ({
  name,
  price,
  image,
  quantity,
  description,
  onPress,
  onPressSecondary,
  cardSize,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { width: cardSize === "large" ? "100%" : "90%" },
      ]}
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.productImage} />
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.secondaryTextSm}>{`${name.substring(
            0,
            100
          )}..`}</Text>
          <Text style={styles.primaryTextSm}>NGN {price}</Text>
        </View>

        <View>
          {quantity > 0 ? (
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={onPressSecondary}
            >
              <Ionicons name="cart" size={20} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.iconContainerDisable} disabled>
              <Ionicons name="cart" size={20} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.secondaryTextSm}>{`${description.substring(
          0,
          100
        )}..`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: "100%",
    height: 350,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 10,
    elevation: 5,
  },
  imageContainer: {
    backgroundColor: colors.light,
    width: "100%",
    height: 200,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 5,
    paddingBottom: 0,
  },
  productImage: {
    height: 200,
    width: "100%",
  },
  infoContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  secondaryTextSm: {
    fontSize: 16,
    fontWeight: "bold",
  },
  primaryTextSm: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.primary,
  },
  iconContainer: {
    backgroundColor: colors.primary,
    width: 30,
    height: 30,
    borderRadius: 5,
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
  },
  iconContainerDisable: {
    backgroundColor: colors.muted,
    width: 30,
    height: 30,
    borderRadius: 5,
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
  },
});
