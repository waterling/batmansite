MyFunction=function() {
    var canvas = document.getElementById('myCanvas');
    var zoom = document.getElementById('myRange').value;

    // zoom=zoom+10;
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var plusX = 7 * 20+10;
        var plusY = 4 * 20+10;
        /*Batman*/
        ctx.beginPath();
        ctx.lineWidth=0.1;

        ctx.clearRect(0,0, 300,300);
        ctx.strokeStyle = "#2aa5a0";
        ctx.moveTo(-7 * zoom + plusX, -0 + plusY);

        var xz;
        for (xz = -7 * zoom; xz < -3 * zoom; xz+=0.01) {
            var x = xz / zoom;
            var absX = Math.abs(x);
            var y = 1.5 * Math.sqrt((-Math.abs(absX - 1)) * Math.abs(3 - absX) / ((absX - 1) * (3 - absX))) * (1 + Math.abs(absX - 3) / (absX - 3)) * Math.sqrt(1 - (x / 7) * (x / 7)) + (4.5 + 0.75 * (Math.abs(x - 0.5) + Math.abs(x + 0.5)) - 2.75 * (Math.abs(x - 0.75) + Math.abs(x + 0.75))) * (1 + Math.abs(1 - absX) / (1 - absX));
            ctx.lineTo(xz + plusX, -y * zoom + plusY);
        }
        for (xz = -3 * zoom; xz < -1 * zoom - 1; xz++) {
            x = xz / zoom;
            absX = Math.abs(x);
            y = (2.71052 + 1.5 - 0.5 * absX - 1.35526 * Math.sqrt(4 - (absX - 1) * (absX - 1)));
            ctx.lineTo(xz + plusX,- y * zoom + plusY);
        }
        ctx.lineTo(-1 * zoom + plusX, -3 * zoom + plusY);
        ctx.lineTo((-0.5 * zoom) + plusX, -(2.2 * zoom) + plusY);
        ctx.lineTo((0.5 * zoom) + plusX, -(2.2 * zoom) + plusY);
        ctx.lineTo(1 * zoom + plusX, -3 * zoom + plusY);

        for (xz = 1 * zoom + 1; xz < 3 * zoom + 1; xz++) {
            x = xz / zoom;
            absX = Math.abs(x);
            y = (2.71052 + 1.5 - 0.5 * absX - 1.35526 * Math.sqrt(4 - (absX - 1) * (absX - 1)));
            ctx.lineTo(xz + plusX, -y * zoom + plusY);
        }
        for (xz = 3 * zoom + 1; xz < 7 * zoom + 1; xz++) {
            x = xz / zoom;
            absX = Math.abs(x);
            y = 1.5 * Math.sqrt((-Math.abs(absX - 1)) * Math.abs(3 - absX) / ((absX - 1) * (3 - absX))) * (1 + Math.abs(absX - 3) / (absX - 3)) * Math.sqrt(1 - (x / 7) * (x / 7)) + (4.5 + 0.75 * (Math.abs(x - 0.5) + Math.abs(x + 0.5)) - 2.75 * (Math.abs(x - 0.75) + Math.abs(x + 0.75))) * (1 + Math.abs(1 - absX) / (1 - absX));
            ctx.lineTo(xz + plusX, -y * zoom + plusY);
        }

        for (xz = 7 * zoom; xz > 4 * zoom; xz--) {
            x = xz / zoom;
            absX = Math.abs(x);
            y = (-3) * Math.sqrt(1 - (x / 7) * (x / 7)) * Math.sqrt(Math.abs(absX - 4) / (absX - 4));
            ctx.lineTo(xz + plusX, -y * zoom + plusY);
        }
        for (xz = 4 * zoom; xz > -4 * zoom; xz--) {
            x = xz / zoom;
            absX = Math.abs(x);
            y = Math.abs(x / 2) - 0.0913722 * x * x - 3 + Math.sqrt(1 - (Math.abs(absX - 2) - 1) * (Math.abs(absX - 2) - 1));
            ctx.lineTo(xz + plusX, -y * zoom + plusY);
        }

        for (xz = -4 * zoom - 1; xz > -7 * zoom - 1; xz--) {
            x = xz / zoom;
            absX = Math.abs(x);
            y = (-3) * Math.sqrt(1 - (x / 7) * (x / 7)) * Math.sqrt(Math.abs(absX - 4) / (absX - 4));
            ctx.lineTo(xz + plusX, -y * zoom + plusY);
        }

        ctx.fillStyle="#2aa5a0";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();



        /*Координатная плоскость*/
        // Вектора
        ctx.lineWidth=0.5;
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(0,plusY);
        ctx.lineTo(2*plusX,plusY);
        ctx.lineTo(2*plusX-5,plusY-3);
        ctx.moveTo(2*plusX-5,plusY+3);
        ctx.lineTo(2*plusX,plusY);


        ctx.moveTo(plusX,2*plusY);
        ctx.lineTo(plusX,0);
        ctx.lineTo(plusX-3,0+5);
        ctx.moveTo(plusX+3,0+5);
        ctx.lineTo(plusX,0);
        ctx.stroke();
        // Разметка
        //    По вектору Х
        ctx.moveTo(-7 * zoom + plusX,plusY-3);
        ctx.lineTo(-7 * zoom + plusX,plusY+3);
        ctx.moveTo(plusX-(7 * zoom)/2,plusY-3);
        ctx.lineTo(plusX-(7 * zoom)/2,plusY+3);
        ctx.moveTo(plusX+(7 * zoom)/2,plusY-3);
        ctx.lineTo(plusX+(7 * zoom)/2,plusY+3);
        ctx.moveTo(plusX+(7 * zoom),plusY-3);
        ctx.lineTo(plusX+(7 * zoom),plusY+3);
        //    По вектору Y
        ctx.moveTo(plusX-3,plusY-7*zoom/2);
        ctx.lineTo(plusX+3,plusY-7*zoom/2);
        ctx.moveTo(plusX-3,plusY+7*zoom/2);
        ctx.lineTo(plusX+3,plusY+7*zoom/2);

        //    Числа для разметки
        ctx.font = '10px "Tahoma"';
        ctx.fillStyle="black";
        ctx.fillText("-"+zoom,-7 * zoom-5 + plusX,plusY-8);
        ctx.fillText("-"+zoom+"/2",plusX-(7 * zoom)/2-10,plusY-8);
        ctx.fillText(zoom+"/2",plusX+(7 * zoom)/2-10,plusY-8);
        ctx.fillText(zoom,plusX+(7 * zoom)-5,plusY-8);

        ctx.fillText("-"+zoom+"/2",plusX-30,plusY-7*zoom/2+3);
        ctx.fillText(zoom+"/2",plusX-30,plusY+7*zoom/2+3);

        ctx.stroke();
    }
};
getCoords=function (input) {
    checkIfFull(document.getElementById('coordX'),document.getElementById('coordY') );
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var x=document.getElementById('coordX').value;
    var y=document.getElementById('coordY').value;
    ctx.beginPath();
    ctx.fillStyle="rgb(255,92,90)";
    ctx.lineWidth=0,1;
    ctx.arc(parseInt(x,10)*7+150,-    parseInt(y,10)*7+90,3,0,Math.PI*2);
    ctx.fill();
};

swap = function () {
    var x = document.getElementById('myRange').value;
    document.getElementById('myRange2').value=x;
    MyFunction();
} ;
swap2 =function () {
    check(document.getElementById('myRange2'));
    var x = document.getElementById('myRange2').value;
    if (x<10){
        document.getElementById('myRange2').value=10;
        x=10;
    }
    if (x>20){
        document.getElementById('myRange2').value=20;
        x=20;
    }
    document.getElementById('myRange').value=x;
    MyFunction();
} ;
function check(input) {
    input.value = input.value.replace(/^0{2}/g, '0');
    input.value = input.value.replace(/[^0-9]|^0{2}/g, '');
}
function checkCoords(input) {
    checkIfFull(document.getElementById('coordX'),document.getElementById('coordY'));
    var ch = input.value;
    ch= ch.replace(/[^-\?+0-9]/g, '');
    if (ch>=21){
        ch = 21;
    } else{
        if (ch<=-21){
            ch=-21
        }
    }
    input.value=ch;
    input.placeholder="Не подходит";

}
function checkIfFull(input,input2) {
    if (input.value!==''&&input2.value!==''){
        document.getElementById('submit').removeAttribute("disabled");
        if (input.value!==''){
            input.placeholder="Заполните, плизки";
        }else{
            input2.placeholder="Заполните, плизки";
        }
    }else{
        document.getElementById('submit').setAttribute("disabled",'disabled');
    }

}


/*
*
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        var plusX = 7*zoom;
        var plusY=4*zoom;

        ctx.beginPath();
        ctx.strokeStyle = "rgb(0, 0, 0)";
        ctx.moveTo(-7*zoom+plusX,0+plusY);

        var xz;
        for (xz = -7*zoom; xz < -3*zoom; xz++) {
            var x = xz / zoom;
            var absX = Math.abs(x);
            var y = 1.5 * Math.sqrt((-Math.abs(absX - 1)) * Math.abs(3 - absX) / ((absX - 1) * (3 - absX))) * (1 + Math.abs(absX - 3) / (absX - 3)) * Math.sqrt(1 - (x / 7) * (x / 7)) + (4.5 + 0.75 * (Math.abs(x - 0.5) + Math.abs(x + 0.5)) - 2.75 * (Math.abs(x - 0.75) + Math.abs(x + 0.75))) * (1 + Math.abs(1 - absX) / (1 - absX));
            ctx.lineTo(xz+7*zoom, y * zoom+4*zoom);
        }
        for (xz = -3*zoom; xz < -1*zoom-1; xz++) {
            x = xz / zoom;
            absX = Math.abs(x);
            y=(2.71052+1.5-0.5*absX-1.35526*Math.sqrt(4-(absX-1)*(absX-1)))*Math.sqrt(Math.abs(absX-1)/(absX-1));
            ctx.lineTo(xz+7*zoom, y * zoom+4*zoom);
        }

        ctx.lineTo(-1*zoom+plusX,3*zoom+plusY);
        ctx.lineTo((-0.5*zoom)+plusX,(2.2*zoom)+plusY);
        ctx.lineTo((0.5*zoom)+plusX,(2.2*zoom)+plusY);
        ctx.lineTo(1*zoom+plusX,3*zoom+plusY);

        for (xz = 1*zoom+1; xz < 3*zoom+1; xz++) {
            x = xz / zoom;
            absX = Math.abs(x);
            y=(2.71052+1.5-0.5*absX-1.35526*Math.sqrt(4-(absX-1)*(absX-1)))*Math.sqrt(Math.abs(absX-1)/(absX-1));
            ctx.lineTo(xz+plusX, y * zoom+plusY);
        }
        for (xz = 3*zoom+1; xz < 7*zoom+1; xz++) {
            x = xz / zoom;
            absX = Math.abs(x);
            y = 1.5*Math.sqrt((-Math.abs(absX-1))*Math.abs(3-absX)/((absX-1)*(3-absX)))*(1+Math.abs(absX-3)/(absX-3))*Math.sqrt(1-(x/7)*(x/7))+(4.5+0.75*(Math.abs(x-0.5)+Math.abs(x+0.5))-2.75*(Math.abs(x-0.75)+Math.abs(x+0.75)))*(1+Math.abs(1-absX)/(1-absX));
            ctx.lineTo(xz+plusX, y * zoom+plusY);
        }

        for (xz = 7*zoom; xz > 4*zoom; xz--) {
            x = xz / zoom;
            absX = Math.abs(x);
            y=(-3)*Math.sqrt(1-(x/7)*(x/7)) * Math.sqrt(Math.abs(absX-4)/(absX-4));
            ctx.lineTo(xz+plusX, y * zoom+plusY);
        }
        for (xz = 4*zoom; xz > -4*zoom; xz--) {
            x = xz / zoom;
            absX = Math.abs(x);
            y=Math.abs(x/2)-0.0913722*x*x-3+Math.sqrt(1-(Math.abs(absX-2)-1)*(Math.abs(absX-2)-1));
            ctx.lineTo(xz+plusX, y * zoom+plusY);
        }

        for (xz = -4*zoom-1; xz > -7*zoom-1; xz--) {
            x = xz / zoom;
            absX = Math.abs(x);
            y =(-3)*Math.sqrt(1-(x/7)*(x/7)) * Math.sqrt(Math.abs(absX-4)/(absX-4));
            ctx.lineTo(xz+plusX, y * zoom+plusY);
        }


        ctx.fill();
        ctx.rotate(180);
*/