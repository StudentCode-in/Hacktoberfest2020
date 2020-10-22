/*creating the global variables*/
var fgImage = null;
var canvas1;
var canvas2;
var bgImage = null;

/*below are the two functions for uploading the foreground and background image and depicting them in the canvas*/
function forImg(){
    canvas1 =document.getElementById('can1');
    var imgFile = document.getElementById('forgimg');
    fgImage = new SimpleImage(imgFile);
    fgImage.drawTo(canvas1);
}

function bacImg(){
    canvas2 = document.getElementById('can2');
    var imgFile1 = document.getElementById('backimg');
    bgImage = new SimpleImage(imgFile1);
    bgImage.drawTo(canvas2);
}


function clearBits1(value){
    var x = Math.floor(value / 16)*16;
    return x;

}
function chop1(){
    for(var pixel of fgImage.values()){
        pixel.setRed(clearBits1(pixel.getRed()));
        pixel.setGreen(clearBits1(pixel.getGreen()));
        pixel.setBlue(clearBits1(pixel.getBlue()));
    }

}
function clearBits2(value){
    var x = Math.floor(value / 16);
    return x;
}
function chop2(){
    for(var pixel of bgImage.values()){
        pixel.setRed(clearBits2(pixel.getRed()));
        pixel.setGreen(clearBits2(pixel.getGreen()));
        pixel.setBlue(clearBits2(pixel.getBlue()));
    }

}
function mix(){
    var answer = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
    for (var pixel of answer.values()){
        var x = pixel.getX();
        var y = pixel.getY();
        var fromForg = fgImage.getPixel(x,y);
        var fromBack = bgImage.getPixel(x,y);
        pixel.setRed(fromForg.getRed()+fromBack.getRed());
        pixel.setGreen(fromForg.getGreen()+fromBack.getGreen());
        pixel.setBlue(fromForg.getBlue()+fromBack.getBlue());
    }
    return answer;
}
  
/*below is the master function which calls the functions one by one for generating the final images!*/
function generate_image(){
    if(fgImage == null || !fgImage.complete() ){
        alert("foreground image not loaded properly");
        return;
    }
    if (bgImage == null || !bgImage.complete()){
        alert("background image not loaded properly");
        return;
    }
    clearImages();
    chop1();
    chop2();
    var result = mix();
    result.drawTo(canvas1);

}

/*function for clearing the canvas*/
function clearImages(){
    clearScreen(canvas1);
    clearScreen(canvas2);
}

function clearScreen(canvas){
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width, canvas.height);
}
