// let soat = document.getElementById("hour");
// let daqiqa = document.getElementById("minut");
// let soniya = document.getElementById("second");

// let hour = 0
// let minut = 0
// let second = 0

// setInterval(() => {
//     second++
//     soniya.innerHTML = second
//     if(second == 59){
//         second = 0
//         minut++
//     }
//     if(minut == 59){
//         minut = 0
//         hour++
//     }
// }, 1000 );

function startTime() {
    let date = new Date();
    document.getElementById("aqua").innerHTML = date.toLocaleTimeString();
    setTimeout(function() {startTime()}, 1000);
  }