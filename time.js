let m = moment();

//Adds current date - Cite Stack overflow
var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
   // dateRef = new Date()
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
    // Time(dateRef);
};




$(document).ready(function(){
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);

presentPast();
setInterval(presentPast, 1000);


});

// function Time(dateRef){
//     var hourNow = dateRef.getHours()
//     hourArray.forEach(function(hour){
//     // console.log(hourNow);
//     let originalHour = $(`${hour}`);
//     // console.log(originalHour)
//     })
// }

// function Time(dateRef){
//     var hourNow = dateRef.getHours()
//     // console.log(hourNow)
//     let originalHour = 14;
//     if (hourNow > originalHour) {
//         console.log("Banana")
//     }
// }



function reFormat() {
    let originalHour = hourNow;

    hourArray.forEach(function(hour){
        let ActivityTxT = localStorage.getItem(hour);
        $("#activity-"+hour).val(ActivityTxT)
})}

//Created array for hours
var hourArray = ["9","10","11","12","13","14","15","16","17"]
var hourArrayAm = ["9:00AM","10:00AM","11:00AM","12:00PM","1:00M","2:00PM","3:00PM","4:00PM","5:00PM"]

//Execute Funtions
tableLoop()
addTime()
addActivity()
addSaveBtn()
reload()


// creating row divs and load 
function tableLoop(){
    hourArray.forEach(function(hour){
        let divElement = $(`<tr class="col s2 center" id='time-${hour}'></tr>`)
        $(".table-body").append(divElement)
        })    
}

//Adding Time Row
function addTime(){
    hourArray.forEach(function(hour, i){
        let labelHour = $(`<td class="col s2 center">${hourArrayAm[i]}</td>`)             
        $(`#time-${hour}`).append(labelHour)
    })
}

//Adding Activity Row
function addActivity(){
    hourArray.forEach(function(hour){
        let inputFiled = $(`<td >
        <form action="" class="input-field">
          <input type="text" class="validate col s8 center" id="activity-${hour}">
          <label for="activity">
          </label>
      </td>`)
      $(`#time-${hour}`).append(inputFiled)
    })
}

//Save Button
function addSaveBtn(){
    hourArray.forEach(function(hour){
        let saveBtn = $(`<td>
        <div class="col s1 center">
          <a class="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons" id="btn-${hour}">add</i></a>
        </div>
      </td>`)
      $(`#time-${hour}`).append(saveBtn)
    })
}

//added event listener to buttons 
$(".striped").on("click",".material-icons", save)


// Saves to local storage
function save(){
    let result = this.id
    var ActivityID = result.replace("btn","activity")
    var ActivityStore = result.slice(4)
    let ActivityTxT = $("#"+ActivityID).val()

    localStorage.setItem(ActivityStore, ActivityTxT);

    console.log(ActivityTxT)
}

// Populates from local storage
function reload(){
    hourArray.forEach(function(hour){
        let ActivityTxT = localStorage.getItem(hour);
        $("#activity-"+hour).val(ActivityTxT)
    })
}


//location.refresh

// //changes css based on time




function presentPast() {

    //console.log("testing every second");
    hourArray.forEach(function(hour){
        let rowHour = $(`#time-${hour}`);
        let T = m.hour()
    
        console.log(hour)
        console.log(T)
    
        if (parseInt(hour) === T) {
            rowHour.addClass("present")
        }
    
        else if (parseInt(hour) < T) {
            rowHour.removeClass("present")
            rowHour.addClass("past")
      
        }
    
        else if (parseInt(hour) > T) {
            rowHour.removeClass("present")
            rowHour.removeClass("past")
        }
    })

};