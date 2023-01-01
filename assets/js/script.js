const time = [9, 10, 11, 12, 1, 2, 3, 4, 5];
const suffix = ['AM', 'PM'];
const hourEl = [['hourOneTimeHolder', 'hourOneContentHolder'], ['hourTwoTimeHolder', 'hourTwoContentHolder'], ['hourThreeTimeHolder', 'hourThreeContentHolder'], 
    ['hourFourTimeHolder', 'hourFourContentHolder'], ['hourFiveTimeHolder', 'hourFiveContentHolder'], ['hourSixTimeHolder', 'hourSixContentHolder'], 
    ['hourSevenTimeHolder', 'hourSevenContentHolder'], ['hourEightTimeHolder', 'hourEightContentHolder'], ['hourNineTimeHolder', 'hourNineContentHolder']];

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
    
        document.getElementById(hourEl[i][0]).textContent = time[i]+suffix[suffixIndex];

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
            document.getElementById(hourEl[i][1]).style.backgroundColor = 'pink';
        } else if(isCurrent) {
            document.getElementById(hourEl[i][1]).style.backgroundColor = 'lightgrey';
        } else {
            document.getElementById(hourEl[i][1]).style.backgroundColor = 'lightgreen';
        }
        if(localStorage != null) {
            document.getElementById(hourEl[i][1]).value = localStorage.getItem(hourEl[i][0]);
        }
    }
}

function runTimer() {
    var timerInterval = setInterval(function() {
        runPlanner();
    }, 100000);
}

runPlanner();
runTimer();

$('.saveBtn').on('click', function(event) {
    event.preventDefault();
    if(event.target.parentNode.parentNode.id == 'planner'){
        localStorage.setItem(event.target.parentNode.id, event.target.parentNode.children[1].children[0].value);
    } else {
        localStorage.setItem(event.target.parentNode.parentNode.id, event.target.parentNode.parentNode.children[1].children[0].value);
    }
} );