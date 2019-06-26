var treeCanvas = document.getElementById("FractalTree");

// Tree Settings
var startLength = document.getElementById("startLength").value;
var minimumLength = document.getElementById("minimumLength").value;
var leavesOn = document.getElementById("leaves");

// Left Branch
var leftLengthMulti = document.getElementById("leftLengthMulti").value;
var leftRotAngle = document.getElementById("leftRotAngle").value;

// Right Branch
var rightLengthMulti = document.getElementById("rightLengthMulti").value;
var rightRotAngle = document.getElementById("rightRotAngle").value;

treeCanvas.width = (window.innerWidth * 0.99) / 2;
treeCanvas.height = 500;

treeCanvas.style = "background : #DDDDDD";

var context = treeCanvas.getContext('2d');

function reset(){
    context.clearRect(0, 0, treeCanvas.width, treeCanvas.height);
    context.resetTransform();

    // Tree Settings
    startLength = document.getElementById("startLength").value;
    minimumLength = document.getElementById("minimumLength").value;
    leavesOn = document.getElementById("leaves").checked;

    // Left Branch
    leftLengthMulti = document.getElementById("leftLengthMulti").value;
    leftRotAngle = document.getElementById("leftRotAngle").value;

    // Right Branch
    rightLengthMulti = document.getElementById("rightLengthMulti").value;
    rightRotAngle = document.getElementById("rightRotAngle").value;

    Branch(
        treeCanvas.width/2,
        treeCanvas.height,
        startLength,
        0
    );

}

function Branch(startX, startY, len, angle){

    context.beginPath();
    context.save();

    context.translate(startX, startY);
    context.rotate(angle * Math.PI/180);

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
    //context.strokeStyle = "#4f3800";
    //context.stroke();

    //console.log(len);
    //console.log(minimumLength + "\n");
    if(len < parseInt(minimumLength)){
        console.log(len + " | " + minimumLength);
        console.log(len < minimumLength);
        console.log(len - minimumLength);

        if(leavesOn){
            context.beginPath();
            context.arc(0, -len, 5, 0, Math.PI/2);
            context.fillStyle = "rgba(0, 100, 0, 0.5)";
            context.fill();
        }
        
        context.restore();
        return;
    }

    console.log("Do we get here? 2");

    // Left Branch
    Branch(0, -len, len*leftLengthMulti, -leftRotAngle);
    // Right Branch
    Branch(0, -len, len*rightLengthMulti, rightRotAngle);

    context.restore();

}

reset();