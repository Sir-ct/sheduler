import { Colors } from "@/constants/Colors";
import React from "react";
import { Modal, Text, View, Dimensions, StyleSheet, TouchableOpacity, Image, ScrollView} from "react-native";
import CloseIcon from "./Icons/CloseIcon";
import EditIcon from "./Icons/EditIcon";
import dayjs from "dayjs";
import { getEndTime } from "@/utils/helpers";

const { width, height } = Dimensions.get("window")

export default function EventModal({isVisible, onClose, event}: any){
    const isEventOver = event && dayjs() > dayjs(event?.time)
    const startTime = event && dayjs(event?.time).format('hh:mm')
    const endTime = event && getEndTime(event?.time, event?.duration)

    return(
        <Modal visible={isVisible} animationType="slide" transparent>
            <View style={[styles.modalContainer]}>
                <View style={[styles.modalTopBar]}>
                    <TouchableOpacity onPress={onClose} style={[styles.topBarBtns]}>
                        <CloseIcon />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.topBarBtns]}>
                        <EditIcon />
                    </TouchableOpacity>
                </View>

                <View style={[styles.timeDisplayTab]}>
                    <Text style={{textAlign: 'center', color: Colors.dark.text, fontSize: 14, fontWeight: 500}}>
                        {startTime} - {endTime}
                    </Text>
                </View>
                <View style={{marginVertical: 20}}>
                    <Text style={[styles.textLarge]}>{event?.title}</Text>
                    <Text style={[styles.textSmall]}>{event?.description}</Text>
                </View>

                <View style={[styles.attendeeImgWrap]}>
                    {
                        event && event.attendees.map((attendee: any, i:any)=>{
                            if (i <= 3)
                            return(
                                <Image 
                                    key={"img"+i}
                                    source={{uri: attendee.display_picture}}
                                    style={[styles.attendeeImg, { position:'relative', left: i==1 ? -5 : i==2 ? -15 : i == 3 ? -25 : 0}]}
                                />
                            )
                        })
                    }
                </View>

                <ScrollView>
                    <Text style={[styles.textLarge]}>Minutes_Plan</Text>
                    <View style={[styles.minuteTab]}>
                        <Text style={[styles.textMedium, {width: '55%'}]}>Appointing the planning Committee</Text>
                        <Text>1:00 - 1:20pm</Text>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        width: width,
        height: height * 0.85,
        backgroundColor: Colors.light.background,
        position: 'absolute',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        bottom: 0
    },
    modalTopBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    topBarBtns: {
        backgroundColor: "#EDEDED",
        width: 48,
        height: 48,
        borderRadius: 48,
        justifyContent: 'center',
        alignItems: 'center'
    },
    timeDisplayTab: {
        paddingHorizontal: 25,
        paddingVertical: 16,
        borderRadius: 80,
        width: 158,
        alignSelf: 'center',
        backgroundColor: Colors.dark.background
    },
    textSmall: {
        fontSize: 14,
        fontWeight: 500,
        color: Colors.light.text,
        textAlign: 'center'
    },
    textLarge: {
        fontSize: 24,
        color: Colors.light.text,
        fontWeight: 700,
        textAlign: 'center'
    },
    textMedium: {
        fontSize: 20,
        color: Colors.light.text,
        fontWeight: 600
    },
    attendeeImgWrap: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: 198,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EDEDED',
        borderRadius: 120
    },
    attendeeImg: {
        width: 50,
        height: 50,
        borderRadius: 36
    },
    minuteTab: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    }
})