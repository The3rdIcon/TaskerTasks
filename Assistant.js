
/*
Ability of precipitation pass specific thresholds ( ie 25%, 45% 55% 65%)
4)Tell me the events I have on my calendar for the day, including Title, Tim/*The var Data contains the json that is pass in from tasker

Goals for code:
X 1)Tell me the Date saying the day of the week and the Full date ( ie THursday, September 12th 2014)[ Separate paste]
X 2)Tell me the Max Temp and the time it is expect to reach that temperature.
X 3)Tell me the weather for the day and at what times during the the day does the probae and any Descriptions I might have added
5) Say everything together

Changes:
        1) Made change to setVoice() not sure if other arrays are needed

Questions to ask:
1) How do you have have a function create a global variable

*/
var arr = [];
// array for probability of precipitation
var pp = [];
//  arry for Maxtemps
var arrTemp = [];
// Change Data Global Tasker Varaiable in to a JSON
var Weather = JSON.parse(global(Data));
// setting a variable to the length of variable data
var hLength = weather.hourly.data.length;
//this array contains the time line since the api is called every day hence why it starts at 6a,
var time = ["6 am","7 am","8 am","9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm", "5 pm","6 pm","7 pm","8 pm","9 pm","10 pm","11 pm","12 am","1 am" ,"2 am","3 am","4 am","5 am"];


// setting variables for speech
var a = " There is a ";
var b = " percent chance it will";
var c = ". You might want to bring an Umbrella";
var d = " today at ";

function setArrays(Data){                                                 // part 1 of goal 4
        for(i = 0; i < hLength; i++){                                   //I'm trying to put all the info into arrays
                pp.push(weather.hourly.data[i].precipProbability);
                arrTemp.push(Weather.hourly.data[i].precipType);
        }
}

function setChanceOfRain(){                                          // part 2 of goal 4
        for(i = 0; i < hLength; i++){
                var ab = JSON.Intparse(Weather.hourly.data[i].precipType);
                var aa = a + pp[i] + b + ab + d + time[i]+ c ;              // Creating string for Voice to speak aloud to me
                if(pp[i] <= .65){
                        var rainTime = aa;
                        break;}
                else if(pp[i] <= .55 ){
                        var rainTime = aa;
                        break;}
                else if(pp[i] <= .45 ){

                        var rainTime = aa;
                        break;}
                else if(pp[i] <= .25 ){
                        var rainTime = aa;
                        break;
                } else { var rainTime = "No need for an umbrella today";}
        }
}

// Function to achieve goal 3
function maxTemp(){
        for(i = 0; i < hLength; i++){
                var max = Math.max(arrTemp);
                if (arrTemp == max){
                        var speak = " The High of the day is " + max + " degrees and will be reached by " + time[i];
                        break;
                }

        }
}

var e = " Good Morning Keith";
// Function to Achieve Goal 5
function morningSay(){
	say( e + a , undefined,undefined,alarm,5,5);
	// Audio streams: call system,ringer,media,alarm,notification
}


