window.addEventListener("load",function(){
    let getBirdImage = createBirdImage();
    let left =0;
    let top = parseInt(getBirdImage.style.top); 
    let intervalID=null;
    let ismMovingRight=true;
    let getTargetImage=createTargetImage();

    function targetPosition(e){
        getTargetImage.style.left=`${e.x}px`
        getTargetImage.style.top=`${e.y}px`;
    }

    this.document.onmousemove=targetPosition;
    function birdGameMovement(){
    
        if(intervalID==null){     
        intervalID=setInterval(() => {
                   
                if(ismMovingRight){
                    left += 20; 
                    getBirdImage.style.left=`${left}px`;
                   
                
                if(left>=window.innerWidth-200){
                        getBirdImage.style.transform="scaleX(-1)"; 
                        ismMovingRight=false;
    
    
                    }
                }else{
                    left-=20;
                    getBirdImage.style.left=`${left}px`;
                    if(left<=0){
                        getBirdImage.style.transform="scaleX(1)";
                        ismMovingRight=true;
                    }
                }
            
               
            if(checkCollision(getBirdImage,getTargetImage)){
                clearInterval(intervalID);
                intervalID=null;
                birdShoted();
           
            }
                    
        }, 100);
    }}

    
    function birdShoted(){
        if(intervalID==null){
            intervalID=setInterval(() => {
                top+=20;
                getBirdImage.style.top=`${top}px`;
                getBirdImage.src="dead2.gif";
                getBirdImage.style.transform="scaleY(-1)"
            if(top >= window.innerHeight - 100){
                getBirdImage.style.display="none";
                clearInterval(intervalID);
                intervalID=null;
                
            }
            }, 200);
        }
    }

    birdGameMovement();

})