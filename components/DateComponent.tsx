import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ChevroletDownIcon from "./Icons/ChevroletDownIcon";
import { Colors } from "@/constants/Colors";
import dayjs from "dayjs"

export default function DateComponent(){
    const weekArr = [0, 1, 2, 3, 4, 5, 6]

    return(
        <View style={[styles.wrap]}>
            <View style={[styles.monthDisplay]}>
                <Text style={[styles.mainText]}>{dayjs().format("MMMM")}</Text>
                <View>
                    <ChevroletDownIcon />
                </View>
            </View>
            <View style={[styles.weekDaysContainer]}>
                {weekArr.map((day)=>(
                    <WeekDay key={"key"+day} day={day} />
                ))}
            </View>
        </View>
    )
}

function WeekDay({day}: any){
    let dayString = dayjs().day(day)
    let today = dayjs().day()

    let formatedDayText = dayjs(dayString).format("ddd")
    let formatedDayDate = dayjs(dayString).format("DD")

    const isActive = day === today

    return(
        <View style={[styles.weekDayWrap, {backgroundColor: isActive ? Colors.light.background : Colors.dark.background}]}>
            <Text style={[styles.weekDayText, {color: isActive ? Colors.light.text : Colors.dark.text}]}>
                {formatedDayText}
            </Text>
            <Text style={[styles.weekDayNumber, {color: isActive ? Colors.light.text : Colors.dark.text}]}>
                {formatedDayDate}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        marginHorizontal: 15
    },
    monthDisplay: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    mainText: {
        color: Colors.dark.text,
        fontSize: 32,
        fontWeight: 700
    },
    weekDaysContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    weekDayWrap: {
        padding: 6,
        width: 37,
        height: 53,
        borderRadius: 15
    },
    weekDayText: {
        fontSize: 12,
        fontWeight: 500,
        textAlign: 'center'
    },
    weekDayNumber: {
        fontSize: 16,
        fontWeight: 700,
        textAlign: 'center'
    }
})