var spacedown = false;
var TimerStarted = false;

var SolveTime = 0.00;

var DownTime = 0;
var StartTime = 0;

document.addEventListener('keydown', event => {
    if (event.code === 'Space'){
        if (spacedown === false){

            spacedown = true;
            
            const d = new Date();
            StartTime = d.getTime();

            let Timer = document.getElementById("Time");
            Timer.style.color = "#ff0000";
        }

        const d = new Date();
        DownTime = (d.getTime()-StartTime)/1000;

        if (DownTime >= 1) {
            let Timer = document.getElementById("Time");
            Timer.style.color = "#00ff00";
            SolveTime = 0.00;
            Timer.innerHTML = "0.00";
        }
    }
})

document.addEventListener('keyup', event => {

    let Timer = document.getElementById("Time");

    if (event.code === 'Space') {

        spacedown = false;

        if (DownTime >= 1) {

            TimerStarted = true;
            Timer.style.color = "#b2a59b";

            var divs = document.querySelectorAll('div');

            divs.forEach(function(element) {
                element.style.visibility = 'hidden';
            });

            Timer.style.visibility = "visible"
            Timer.style.fontSize = "35vh"

            var x = setInterval(function() {

                document.addEventListener('keydown', event => {

                    if (event.code === 'Space'){
                        clearInterval(x);
                        
                        var divs = document.querySelectorAll('div');

                        divs.forEach(function(element) {
                            element.style.visibility = 'visible';
                            Timer.style.fontSize = "30vh"
                        });
                    }
                })

                SolveTime += .01;
                Timer.innerHTML = Math.round(SolveTime * 10) / 10;
            }, 10)
        }

        if (DownTime < 1) {

            console.log("released too soon");
            Timer.style.color = "#607274";
        }
    }
})
