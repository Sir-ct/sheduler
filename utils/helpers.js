import dayjs from "dayjs"

function getEndTime(startTime, duration){
    let seperatedDuration = duration.split(" ")
    const firstParam = parseFloat(seperatedDuration[0])
    
    let endTime = dayjs(startTime).add(firstParam, "h").format("hh:mm a")

    return endTime
}

export { getEndTime }