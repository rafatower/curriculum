function Main() {
    this.execute = function (){
        //1. create list
        //a advice try you images have same size
        const images = [
            "./images/slider1.jpeg",
            "./images/slider2.jpeg",
            "./images/slider3.jpeg",
            "./images/slider4.jpeg",
            "./images/slider5.jpeg"];


        //2 load image by default
        let currentImageIndex = 0;
        let currentImage = images[currentImageIndex];
        const sliderElement = document.getElementById("slider-container");
        sliderElement.src = currentImage;

        //enable event listeners
        const rightButtonElement = document.getElementById("right-button");
        rightButtonElement.addEventListener('click', function(){
            //check that currentImageIndex is greater than 0
            if(currentImageIndex > 0){
                currentImageIndex = currentImageIndex -1;
                sliderElement.src = images[currentImageIndex];
            }
        });


        const leftButtonElement = document.getElementById("left-button");
        leftButtonElement.addEventListener('click', function(){
            //check that currentImageIndex when increment is lower than max number array
            if((currentImageIndex+1) < images.length){
                currentImageIndex = currentImageIndex +1;
                sliderElement.src = images[currentImageIndex];
            }
        });
    }
}
new Main().execute();