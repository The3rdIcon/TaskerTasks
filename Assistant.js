/*The var Data contains the json that is pass in from tasker
 
Goals for code:
X 1)Tell me the Date saying the day of the week and the Full date ( ie THursday, September 12th 2014)[ Separate paste] DOESN'T INVOLVE 
X 2)Tell me the Max Temp and the time it is expect to reach that temperature.
X 3)Tell me the weather for the day and at what times during the the day does the probability of precipitation pass specific thresholds ( ie 25%, 45% 55% 65%)
4)Tell me the events I have on my calendar for the day, including Title, Time and any Descriptions I might have added
 
Changes:
        1) Made change to setVoice() not sure if other arrays are needed
*/

// array for probability of precipitation
var pp = [];
//  arry for precipitation Type
var precipType = [];
// setting global var
var Weather;
var precipTime;
var rainTime;
var pt; // precip type variable
var rainPercent;
var maxTempTime = timeChange(Weather.daily.data[0].apparentTemperatureMaxTime;);
var maxTemp = Weather.daily.data[0].apparentTemperatureMax;


// Resp is the Global variable that will be pasted from tasker to Javascript
var Data = global(Resp);
 
// setting a variable to the length of variable data
var hLength = Weather.hourly.data.length;

 
function setArrays(Data){                                        //  puts info into arrays for all other functions
        Weather = JSON.parse(Data);
        for(var i = 0; i < hLength; i++){                                   // I'm trying to put all the info into arrays
                pp.push(Weather.hourly.data[i].precipProbability);
				z = flashLong(JSON.stringify(pp[i]);                                  // equivalent of console but for android
                precipType.push(Weather.hourly.data[i].precipType);
				y = flashLong(JSON.stringify(precipType[i]);                     // equivalent of console but for android
        }
}
function timeChange(z){                                        // Determines the time of day for the event
 var date = new Date(z * 1000);
 var hr    = date.getHours();
 var min  = date.getMinutes();
 var time;
flashLong( "Before Processing: " + hr );
   if(hr > 11){
     hr = hr - 12;
     var AP = "PM";
    }
   else { 
      var AP = "AM"; 
    }
   if (hr === 0){hr = 12;}
   if(min === 0){
      time = hr+" "+AP;
    }
   else { 
       time = hr + " "+min + " "+ AP; 
    }
 flashLong(time);
 return time;
 }
function setChance(){                                          // part of goal 3
     for(var i = 0; i < hLength; i++){
             if(pp[i] >= 0.65){                                                    // Remainder of function is just chosing if 
				rp = pp[i];
				rainTime = timeChange(Data.hourly.data[i].time);
				break;}}
     for(var i = 0; i < hLength; i++){
         if(pp[i] >= 0.55){                                                    // Remainder of function is just chosing if 
		 rp = pp[i];
		 rainTime = timeChange(Data.hourly.data[i].time);
		 pt = precipType[i];
		 
		 
		 break;}}
     for(var i = 0; i < hLength; i++){
             if(pp[i] >= 0.45){                                                    // Remainder of function is just chosing if 
				rp = pp[i];
				rainTime = timeChange(Data.hourly.data[i].time);
				pt = precipType[i];
				break;}}
     for(var i = 0; i < hLength; i++){
             if(pp[i] >= 0.35){                                                    // Remainder of function is just chosing if 
				rp = pp[i];
				rainTime = timeChange(Data.hourly.data[i].time);
				pt = precipType[i];
				break;}}
     for(var i = 0; i < hLength; i++){
             if(pp[i] >= 0.35){                                                    // Remainder of function is just chosing if 
				rp = pp[i];
				rainTime = timeChange(Data.hourly.data[i].time);
				pt = precipType[i];
				break;}}
     for(var i = 0; i < hLength; i++){
             if(pp[i] >= 0.25){                                                    // Remainder of function is just chosing if 
				rp = pp[i];
				rainTime = timeChange(Data.hourly.data[i].time);
				pt = precipType[i];
				break;}}
     for(var i = 0; i < hLength; i++){
             if(pp[i] >= 0.1){                                                    // Remainder of function is just chosing if 
				rp = pp[i];
				rainTime = timeChange(Data.hourly.data[i].time);
				pt = precipType[i];
				break;}}
	if ( if (typeof pt == undefined){
         pt = "nothing";
		} else {
			var noPrecip = "No Chance of" ;
			rp.split(".");
			rp = rp[1];
			}
	z = flashLong(rp);
	y = flashLong(pt);
 }
 

 





// to achieve Goal 1

var a = [1,2,3,4,5,6,7,8,9,10,11,12];  // May not need this
var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var Day = global(DAYW);
var today = global(DATE).split("-");
var tlength = today.length; // May not need this
// First Function called
function date(){
  var monthNum =today[0]-1;
  var nameMonth = month[monthNum];
  var Year = today[2];
  var speak = "Good Morning. Today is " + Day + " " + nameMonth "," + today[1] + " " Year; 

}