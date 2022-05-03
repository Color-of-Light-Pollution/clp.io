//data
var data;
var dateList = [];
var colorList = [];
var pollList = [];
var weatherList = [];
var aqiList = []; 
var colorct = 0;


//animation handlers
var timer_wait;
var newSlide = true;


function setup() {
    let canvas = createCanvas(windowWidth, 500);
    canvas.parent('sketch-container');
    background('#29506B');
    frameRate(2);
    
    //constant setup
    textSize(24);
    textFont("Proxima-Nova");

    //get data
    data = document.getElementById("csv").innerHTML.trim().split("\n");
    data = data.filter(element => {
        return element !== '';
    });
    
    var dataSplit;
    for (var i = 0; i < data.length; i++){
        dataSplit = data[i].split (", ");
        dateList.push(dataSplit[0]);
        colorList.push(dataSplit[1]);
        pollList.push(dataSplit[2]);
        weatherList.push(dataSplit[3]);
        aqiList.push(dataSplit[4]);
    }
    
    //timer setup
    timer_wait = new Timer(1000);
}

function draw() {
    if (newSlide){
        //bg color loop
        if (colorct == colorList.length){colorct = 0;}
        background(colorList[colorct]);
        
        //AQI
        textSize(24);
        text("AQI", 60, 200);
        textSize(180);
        text(aqiList[colorct], 40, 350);
        
        //highest pollutant
        textSize(21);
        print(pollList[colorct]);
        text(findHighestPollutant(pollList[colorct]), 60, 400);
        
        //Date & time & weather
        print(dateList[colorct]);
        text(datetimeParse(dateList[colorct]) + " | " + weatherList[colorct], 60, 450);
                
        timer_wait.reset();
        colorct++;
        newSlide = false; 
    }
    
    if (timer_wait.expired()){
        newSlide = true;
    }
}
