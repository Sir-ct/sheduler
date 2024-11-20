import React from "react";
import { Image, StyleSheet, View } from "react-native";
import MenuHam from "./Icons/MenuHam";


const dp = require('@/assets/images/dp-img.png')
const dpCrown = require('@/assets/images/dp-crown.png')

export default function Header(){
    return(
        <View style={[styles.headerWrap]}>
            <Dp />
            <View>
                <MenuHam />
            </View>
        </View>
    )
}

function Dp(){
    return(
        <View style={[styles.dpWrap]}>
            <Image source={dpCrown} style={[styles.dpCrown]} />
            <Image source={dp} style={[styles.dp]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrap: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dpWrap: {
        width: 40,
        height: 40,
        borderRadius: 40,
        position: 'relative'
    },
    dp: {
        width: 40,
        height: 40,
        borderRadius: 40
    },
    dpCrown: {
        position: 'absolute',
        left: 10,
        top: -25,
        zIndex: 10
    }
})