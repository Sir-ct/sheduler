import { Colors } from "@/constants/Colors";
import React from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import CheckmarkIcon from "./Icons/CheckmarkIcon";
import { getEndTime } from "@/utils/helpers"
import dayjs from "dayjs";
import ArrowupIcon from "./Icons/ArrowupIcon";

interface EventCardProps {
    index: number;
    onSelect: (event: EventProps)=>void;
    event: EventProps;
}

interface AttendeeProp {
    id: string;
    name: string;
    role: string;
    display_picture: string;
}

interface EventProps {
    id: string;
    title: string;
    description: string;
    time: string;
    duration: string,
    attendees: AttendeeProp[];
    minutes_plan: object[];
}

export default function EventCard(props: EventCardProps){
    const isEventOver = dayjs() > dayjs(props.event.time)
    const startTime = dayjs(props.event.time).format('hh:mm')
    const endTime = getEndTime(props.event.time, props.event.duration)
    console.log(props.event, "start", startTime, "endTime", endTime, isEventOver, props.index)
    return(
        <>
        {
            isEventOver
            ?
                <TouchableOpacity onPress={()=>{props.onSelect(props.event)}} style={[styles.cardWrap, {backgroundColor: props.index == 0 ? "#FCD36A" : props.index == 1 ? Colors.light.background : "#6DCE0C"}]}>
                    <View style={[styles.toprowWrap, {marginBottom: 0}]}>
                        <View style={[styles.toprowText]}>
                            <Text style={[styles.textLarge]}>{props.event.title}</Text>
                            <Text style={[styles.textMedium]}>{props.event.description.length > 25 ? props.event.description.substring(0, 24)+ " ..." : props.event.description}</Text>
                        </View>
                        <View style={[styles.indicator]}>
                            <CheckmarkIcon />
                        </View>
                    </View>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={()=>{props.onSelect(props.event)}} style={[styles.cardWrap]}>
                    <View style={[styles.toprowWrap]}>
                        <View style={[styles.toprowText]}>
                            <Text style={[styles.textMedium]}>{startTime} - {endTime}</Text>
                            <Text style={[styles.textLarge]}>{props.event.title}</Text>
                            <Text style={[styles.textMedium]}>{props.event.description.length > 25 ? props.event.description.substring(0, 24)+ " ..." : props.event.description}</Text>
                        </View>
                        <View style={[styles.attendeeImgWrap]}>
                            {
                                props.event.attendees.map((attendee, i)=>{
                                    if (i <= 2)
                                    return(
                                        <Image 
                                            key={"img"+i}
                                            source={{uri: attendee.display_picture}}
                                            style={[styles.attendeeImg, { position:'relative', left: i==1 ? -5 : i==2 ? -15 : 0}]}
                                        />
                                    )
                                })
                            }
                        </View>
                    </View>
        
                    <View style={[styles.bottomrowWrap]}>
                        <View style={{
                            flexDirection: 'row',
                            gap: 10
                        }}>
                            <View style={[styles.bottomrowTimeDisplay]}>
                                <Text style={[styles.btdText]}>{dayjs(props.event.time).day() === dayjs().day() ? "Today" : dayjs(props.event.time).format("dddd")}</Text>
                            </View>
                            <View style={[styles.bottomrowTimeDisplay]}>
                                <Text style={[styles.btdText]}>{props.event.duration.split(" ")[0]}{props.event.duration.split(" ")[1].substring(0, 1)}</Text>
                            </View>
                        </View>
                        <View style={[styles.indicator]}>
                            <ArrowupIcon />
                        </View>
                    </View>
                </TouchableOpacity>
        }
        </>
    )
}

const styles = StyleSheet.create({
    cardWrap: {
        padding: 15,
        borderRadius: 40,
        marginVertical: 10,
        backgroundColor: Colors.light.background
    },
    toprowWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'flex-start',
        marginBottom: 20
    },
    toprowText: {
        width: '55%'
    },
    textMedium: {
        fontSize: 14,
        fontWeight: 500,
        color: Colors.light.text
    },
    textLarge: {
        fontSize: 24,
        color: Colors.light.text,
        fontWeight: 700
    },
    attendeeImgWrap: {
        flexDirection: 'row'
    },
    attendeeImg: {
        width: 36,
        height: 36,
        borderRadius: 36
    },
    bottomrowWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    indicator:{
        width: 51, 
        height: 51,
        borderRadius: 51,
        justifyContent:'center',
        alignItems: 'center', 
        backgroundColor: 'black'
    },
    bottomrowTimeDisplay: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 80,
        backgroundColor: '#EDEDED'
    },
    btdText: {
        fontSize: 14,
        fontWeight: 500
    }
})