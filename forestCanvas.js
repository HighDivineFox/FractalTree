var forestCanvas = document.getElementById("FractalForest");

forestCanvas.width = window.innerWidth * 0.99;
forestCanvas.height = window.innerHeight * 0.7;

forestCanvas.style = "background : #DDDDDD";

var context = forestCanvas.getContext('2d');

function Branch(startX, startY, len, angle){

    context.beginPath();
    context.save();

    context.translate(startX, startY);
    context.rotate(angle * Math.PI/100);

    context.moveTo(0, 0);
    context.lineTo(0, -len);

    context.lineWidth = len / 10
    if(len < 15){
        context.strokeStyle = "green";
    }else{
        context.strokeStyle = "black";
    }
    context.strokeStyle = "outline : 3px dotted black";
    context.stroke();
    context.lineWidth = len / 11;
    context.strokeStyle = "#4f3800";
    context.stroke();

    if(len < 4){

        context.beginPath();
        context.arc(0, -len, 5, 0, Math.PI/2);
        context.fillStyle = "rgba(0, 100, 0, 0.5)";
        context.fill();

        context.restore();
        return;
    }

    //Branch(0, -len, len*0.67, angle+(Math.random() * 20));
    //Branch(0, -len, len*0.67, angle-(Math.random() * 20));

    Branch(0, -len, len*0.67, angle+10);
    Branch(0, -len, len*0.67, angle-10);

    context.restore();

}

for(var i = 0; i < 50; i++){
    Branch(
        250 + (Math.random() * (forestCanvas.width - 500)),
        forestCanvas.height,
        60 + (Math.random() * 120),
        0
    );
}