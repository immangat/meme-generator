function geetings(name){
    var today = new Date()
    var hours = today.getHours()
    var time = ""
    if(hours >= 4 && hours < 12){
        time = "Good Morning"
    } else {
        if(hours >= 12 && hours < 17) {
            time = " Good Afternoon"
        }
    }

    const full = `${time}, ${name}` 
    console.log(full)

}
geetings("mangat")