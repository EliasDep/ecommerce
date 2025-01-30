import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { colors } from '../globals/colors'
import { useNavigation } from '@react-navigation/native'

const CardProduct = ({ product }) => {
    const { name, description, price, image } = product
    const { width } = useWindowDimensions()
    const navigation = useNavigation()

    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate("ProductDetail", { product })}>
            <Image style={styles.image} source={{ uri: image }} resizeMode='cover' />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.description} numberOfLines={2}>{description}</Text>
                <Text style={styles.price}>Precio: {price} $ ARG</Text>
            </View>
        </Pressable>
    )
}

export default CardProduct

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        margin: 10,
        borderRadius: 8,
        padding: 10,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        elevation: 3, // Sombra en Android
        shadowColor: "#000", // Sombra en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 5,
        backgroundColor: "gray",
    },
    infoContainer: {
        flex: 1,
    },
    title: {
        color: colors.lightGray,
        fontSize: 16,
        fontWeight: "bold",
    },
    description: {
        color: colors.lightGray,
        fontSize: 14,
        flexWrap: "wrap",
        marginVertical: 5,
    },
    price: {
        color: colors.lightGray,
        fontSize: 16,
        fontWeight: "600",
    }
})
