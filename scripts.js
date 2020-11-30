// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init(){
    let shuttleheight = document.getElementById("spaceShuttleHeight");
    let shuttleBackground = document.getElementById("shuttleBackground");

    let takeoffbutton = document.getElementById("takeoff");
    takeoffbutton.addEventListener("click",handleTakeoffButton)
    let landingbutton = document.getElementById("landing");
    landingbutton.addEventListener("click", handleLandingButton);
    let missionAbort =  document.getElementById("missionAbort");
    missionAbort.addEventListener("click",handleMissionAbort);

    let imjObj=document.getElementById('rocket');
    imjObj.style.position='absolute';
    imjObj.style.left='0px';
    imjObj.style.bottom='0px';

    let rightButton = document.getElementById('right');
    rightButton.onclick=rightHandler;
    function rightHandler(){
        let imjObj=document.getElementById("rocket");
        let movement=parseInt(imjObj.style.left)+10+'px';
        imjObj.style.left=movement;

    }
   

    let leftButton = document.getElementById("left");
    leftButton.addEventListener("click", function(){
        movement = parseInt(imjObj.style.left)-10+'px';
        imjObj.style.left=movement;
    });

    let downButton= document.getElementById("down");
    downButton.addEventListener("click",function(){
        movement=parseInt(imjObj.style.bottom)-10+'px';
        imjObj.style.bottom=movement;
        shuttleheight.innerHTML=parseInt(shuttleheight.innerHTML)-10000;
    });

    let upButton= document.getElementById("up");
    upButton.onclick=upHandler;
    function upHandler(){
        let imjObj=document.getElementById("rocket");
        let movement=parseInt(imjObj.style.bottom)+10+'px';
        imjObj.style.bottom=movement;
        shuttleheight.innerHTML=parseInt(shuttleheight.innerHTML)+10000;
    }

   


    function handleTakeoffButton(){
    

        let result = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (result) {
            document.querySelector("p").innerHTML="Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleheight.innerHTML ="10000"
        }
        
    };

    function handleLandingButton(){
    
        let result=window.alert("The shuttle is landing. Landing gear engaged.");
        document.querySelector("p").innerHTML="Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleheight.innerHTML="0";

    
    };

    function handleMissionAbort(){
   
        let result = window.confirm("Confirm that you want to abort the mission");
        if(result){
            document.querySelector("p").innerHTML="mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleheight.innerHTML="0";

    };

  

    }

handleLandingButton();
handleTakeoffButton();
handleMissionAbort();


}
    


window.onload = init;
    
