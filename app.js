setCurrentTime = () => {
    const d = new Date();
    let hours = d.getHours()
        if(hours<10)
            hours = "0" + minutes
    let minutes = d.getMinutes()
        if(minutes<10)
            minutes = "0" + minutes
    let time = hours + " &nbsp;  " + minutes;
    document.getElementById("time").innerHTML = time;
}

setCurrentDate = () => {
    const d = new Date();
    let date = (d.getDate()).toString()
    document.getElementById("date").innerText = date;
}

setCurrentMonth = () => {
    const d = new Date();
    let month = (d.getMonth() + 1).toString()
    document.getElementById("month").innerHTML = "/&ensp;" + month;
}

setCurrentDay = () => {
    const d = new Date();
    let day = ""
    switch(d.getDay()){
        case 0: day = "Sunday"
                break 
        case 1: day = "Monday"
                break 
        case 2: day = "Tuesday"
                break 
        case 3: day = "Wednesday"
                break 
        case 4: day = "Thursday"
                break 
        case 5: day = "Friday"
                break 
        case 6: day = "Saturday"
                break
    }
    document.getElementById("day").innerText = day;
}

setCurrentTime()
setCurrentDate()
setCurrentMonth()
setCurrentDay()

setInterval(function () {setCurrentTime()}, 1000*60)
setInterval(function () {setCurrentDate()}, 1000*60*60*24)
