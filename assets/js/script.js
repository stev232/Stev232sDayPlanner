const time = [9, 10, 11, 12, 1, 2, 3, 4, 5];
const suffix = ['AM', 'PM'];
const hourEl = [['hourOne', 'hourOneTimeHolder', 'hourOneContent', 'hourOneContentHolder', 'hourOneSave'], ['hourTwo', 'hourTwoTimeHolder', 'hourTwoContent', 'hourTwoContentHolder', 'hourTwoSave'], 
['hourThree', 'hourThreeTimeHolder', 'hourThreeContent', 'hourThreeContentHolder', 'hourThreeSave'], ['hourFour', 'hourFourTimeHolder', 'hourFourContent', 'hourFourContentHolder', 'hourFourSave'],
['hourFive', 'hourFiveTimeHolder', 'hourFiveContent', 'hourFiveContentHolder', 'hourFiveSave'], ['hourSix', 'hourSixTimeHolder', 'hourSixContent', 'hourSixContentHolder', 'hourSixSave'],
['hourSeven', 'hourSevenTimeHolder', 'hourSevenContent', 'hourSevenContentHolder', 'hourSevenSave'], ['hourEight', 'hourEightTimeHolder', 'hourEightContent', 'hourEightContentHolder', 'hourEightSave'], 
['hourNine', 'hourNineTimeHolder', 'hourNineContent', 'hourNineContentHolder', 'hourNineSave']];

var isCurrent;
var isPast;
var suffixIndex;

var today = dayjs();
document.getElementById('date').textContent = today.format('dddd, MMMM DD YYYY');

function runPlanner() {
    var currentTime = dayjs().format('HH');

    for(var i = 0; i<hourEl.length; i++) {
        if(time[i] >= time[0] && time[i] != 12) {
            suffixIndex = 0;
        } else {
            suffixIndex = 1;
        }
    
        document.getElementById(hourEl[i][1]).textContent = time[i]+suffix[suffixIndex];

        if(suffixIndex == 1 && time[i] != 12) {
            if(time[i]+12 == currentTime) {
                isCurrent = true;
                isPast = false;
            } else if(time[i]+12 < currentTime) {
                isCurrent = false;
                isPast = true;
            } else {
                isCurrent = false;
                isPast = false;
            }
        } else {
            if(time[i] == currentTime) {
                isCurrent = true;
                isPast = false;
            } else if(time[i] < currentTime) {
                isCurrent = false;
                isPast = true;
            } else {
                isCurrent = false;
                isPast = false;
            }
        }
    
        if(isPast) {
            document.getElementById(hourEl[i][2]).style.backgroundColor = 'pink';
        } else if(isCurrent) {
            document.getElementById(hourEl[i][2]).style.backgroundColor = 'lightgrey';
        } else {
            document.getElementById(hourEl[i][2]).style.backgroundColor = 'lightgreen';
        }
    }
}

runPlanner();