function createBirdImage(){
    let getBirdImage=document.createElement("img");
    getBirdImage.src="bird2.gif";
    getBirdImage.style.position="absolute";
    getBirdImage.style.width="200px";
    getBirdImage.style.height="200px";

    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;  

    let randomPositionX = Math.random()*(screenWidth-100);
    let randomPositiony = Math.random()*(screenHeight-100);

    getBirdImage.style.left=`${randomPositionX}px`;
    getBirdImage.style.top=`${randomPositiony}px`;
    document.body.append(getBirdImage);
    return getBirdImage;
}

function createTargetImage(){
    let getTargetImage = this.document.createElement("img");
    getTargetImage.src="target.png";
    getTargetImage.style.position="absolute";
    getTargetImage.style.width="50px";
    getTargetImage.style.height="50px";
    this.document.body.appendChild(getTargetImage);
    return getTargetImage;
}

function checkCollision(bird,target){
    let birdBounderies = bird.getBoundingClientRect();
    let targetBounnderies = target.getBoundingClientRect();

    return(
        birdBounderies.top + birdBounderies.height >= targetBounnderies.top &&
        birdBounderies.top <= targetBounnderies.bottom &&
        birdBounderies.left + birdBounderies.width/2 >= targetBounnderies.left&&
        birdBounderies.left + birdBounderies.width/2 <= targetBounnderies.right 
        
    )

}