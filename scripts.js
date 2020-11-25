// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init(){

    let takeoffbutton = document.getElementById("takeoff");
    takeoffbutton.addEventListener("click",handleTakeoffButton)
    let landingbutton = document.getElementById("landing");
    landingbutton.addEventListener("click", handleLandingButton);
    let missionAbort =  document.getElementById("missionAbort");
    missionAbort.addEventListener("click",handleMissionAbort);

   

function handleTakeoffButton(){
    let shuttleheight = document.getElementById("spaceShuttleHeight");
    let shuttleBackground = document.getElementById("shuttleBackground");

    let result = window.confirm("Confirm that the shuttle is ready for takeoff");
    if (result) {
        document.querySelector("p").innerHTML="Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        shuttleheight.innerHTML ="10000"
    }
        
    };

function handleLandingButton(){
    let shuttleheight=document.getElementById("spaceShuttleHeight");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let result=window.alert("The shuttle is landing. Landing gear engaged.");


    document.querySelector("p").innerHTML="Mission aborted.";
    shuttleBackground.style.backgroundColor = "green";
    shuttleheight.innerHTML="0";

    
};

function handleMissionAbort(){
    let shuttleheight = document.getElementById("spaceShuttleHeight");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let result = window.confirm("Confirm that you want to abort the mission");
    if(result){
        document.querySelector("p").innerHTML="mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleheight.innerHTML="0";

    }

    
}
    
   
  


handleLandingButton();
handleTakeoffButton();
handleMissionAbort();
}
 
    
 
   
    

window.onload = init;
    
