function rand(min, max) {
  return Math.round(Math.random() * (max-min) + min);
}

function fontStyle(fsize = 16, color = "#000", align = LEFT, style = NORMAL, lineheight = fsize*1.2, font = null){
    fill(color);
    textSize(fsize);
    textAlign(align);
    textStyle(style);
    textLeading(lineheight);

    if (font!= null){
        textFont(font);
    }
}

function flip(){
    return rand (-1, 1) > 0; 
}

function findHighestPollutant(datalist){
    var a = "PM1.0s,PM2.5s,PM10s,PM10e,PM25e,PM100e,P03μm,P05μm,P10μm,P25μm,P50μm,P100μm".split(",");
    var b = datalist.split(",");
    
    for (var i = 0; i < b.length; i++){ 
        b[i] = parseInt(b[i], 10);
    }
    
    var maxVal = Math.max(...b);
    var maxValIndex = b.indexOf(maxVal);
    
    return "Highest Pollutant: "+ a[maxValIndex] + ": " + b[maxValIndex];
}

function datetimeParse(aa){
//    var aa = "2022 - 04 - 30 | 17:00";
    
    var year = aa.substr(0,4);
    var monthno = aa.substr(7,2);
    var day = aa.substr(12,2);
    var hour = aa.substr(17,2);
    
    var monthstr;
    switch (monthno) {
        case "01":
            monthstr = "January";
            break;
        case "02":
            monthstr = "February";
            break;
        case "03":
            monthstr = "March";
            break
        case "04":
            monthstr = "April";
            break;
        case "05":
            monthstr = "May";
            break;
        case "06":
            monthstr = "June";
            break;
        case "07":
            monthstr = "July";
            break;
        case "08":
            monthstr = "August";
            break;
        case "09":
            monthstr = "September";
            break;
        case "10":
            monthstr = "October";
            break;
        case "11":
            monthstr = "November";
            break;
        case "12":
            monthstr = "December";
            break; 
        default:
            monthstr = "invalid month";
    }
    
    var ampm = "AM"; 
    if (hour > 12){
        ampm = "PM";
        hour = hour - 12;
    }
    if (hour == 0){
        hour = 12;
    }

    
    return monthstr + " " + day +", " + year +" | " + hour+ampm;
    
}