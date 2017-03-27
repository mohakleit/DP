//this function returns one time sample with the time and voltage values
function getData() {
//Get the time data from server
	var time;
	var timeFile = new XMLHttpRequest();
		timeFile.open("GET", "http://localhost/DP/time.txt", true);
		timeFile.setRequestHeader("Access-Control-Allow-Origin", "*");
		timeFile.send();
		timeFile.onreadystatechange = function () {
			if(timeFile.readyState === 4 && timeFile.status === 200) {
				//Make sure the document is ready to parse
				time = timeFile.responseText.split(/\r\n|\n/).map(Number);
				getVoltage(time);
			}
		}
	}

function getVoltage(time) {
//Get the voltage from server
	var voltage;
	var voltageFile = new XMLHttpRequest();
		voltageFile.open("GET","http://localhost/DP/voltage.txt", true);
		voltageFile.send();
		voltageFile.onreadystatechange = function () {
			if (voltageFile.readyState === 4 && voltageFile.status === 200) { 
			//Make sure document is ready to parse
				voltage = voltageFile.responseText.split(/\r\n|\n/).map(Number);
				plotGraph(time,voltage);
			}
		}
	}
