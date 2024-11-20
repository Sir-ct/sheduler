import dayjs from "dayjs"

function getEndTime(startTime, duration){
    let seperatedDuration = duration.split(" ")
    const firstParam = parseInt(seperatedDuration[0])
    
    let endTime = dayjs(startTime).add(firstParam, "h").format("hh:mm a")

    return endTime
}

export { getEndTime }