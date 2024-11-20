import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Header from "@/components/Header";
import DateComponent from "@/components/DateComponent";
import EventCard from "@/components/EventCard";
import events from "@/events.json"
import dayjs from "dayjs";
import EventModal from "@/components/EventModal";

export default function Index() {
  const [showEventModal, setShowEventModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const todaysEvents:any = events.filter((ev)=>{
    return (dayjs().day() == dayjs(ev.time).day())
  })

  function openEventModal(){
    setShowEventModal(true)
  }
  
  function closeEventModal(){
    setShowEventModal(false)
  }

  function selectEvent(event: any){
    setSelectedEvent(event)
    openEventModal()
  }
  return (
    <View style={[styles.wrap]}>
      <Header />
      <DateComponent />
      <ScrollView>
        {
          events && todaysEvents.map((ev:any, i:any)=>{
            return(
              <EventCard key={"ev"+i} index={i} event={ev} onSelect={selectEvent} />
            )
          })
        }
      </ScrollView>
      <EventModal event={selectedEvent} isVisible={showEventModal} onClose={closeEventModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
      flex: 1,
      backgroundColor: Colors.dark.background
  }
})
