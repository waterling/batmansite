MyFunction=function() {
    var canvas = document.getElementById('myCanvas');
    var zoom = document.getElementById('myRange').value;

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var plusX = 7 * zoom;
        var plusY = 4 * zoom;
        ctx.beginPath();

        ctx.clearRect(0,0, 300,300);
        ctx.strokeStyle = "rgb(51, 153, 255)";
        ctx.moveTo(-7 * zoom + plusX, -0 + plusY);

        var xz;
        for (xz = -7 * zoom; xz < -3 * zoom; xz++) {
            var x = xz / zoom;
            var absX = Math.abs(x);
            var y = 1.5 * Math.sqrt((-Math.abs(absX - 1)) * Math.abs(3 - absX) / ((absX - 1) * (3 - absX))) * (1 + Math.abs(absX - 3) / (absX - 3)) * Math.sqrt(1 - (x / 7) * (x / 7)) + (4.5 + 0.75 * (Math.abs(x - 0.5) + Math.abs(x + 0.5)) - 2.75 * (Math.abs(x - 0.75) + Math.abs(x + 0.75))) * (1 + Math.abs(1 - absX) / (1 - absX));
            ctx.lineTo(xz + 7 * zoom, -y * zoom + 4 * zoom);
        }
        for (xz = -3 * zoom; xz < -1 * zoom - 1; xz++) {
            x = xz / zoom;
            absX = Math.abs(x);
            y = (2.71052 + 1.5 - 0.5 * absX - 1.35526 * Math.sqrt(4 - (absX - 1) * (absX - 1))) * Math.sqrt(Math.abs(absX - 1) / (absX - 1));
            ctx.lineTo(xz + 7 * zoom,- y * zoom + 4 * zoom);
        }

        ctx.lineTo(-1 * zoom + plusX, -3 * zoom + plusY);
        ctx.lineTo((-0.5 * zoom) + plusX, -(2.2 * zoom) + plusY);
        ctx.lineTo((0.5 * zoom) + plusX, -(2.2 * zoom) + plusY);
        ctx.lineTo(1 * zoom + plusX, -3 * zoom + plusY);

        for (xz = 1 * zoom + 1; xz < 3 * zoom + 1; xz++) {
            x = xz / zoom;
            absX = Math.abs(x);
            y = (2.71052 + 1.5 - 0.5 * absX - 1.35526 * Math.sqrt(4 - (absX - 1) * (absX - 1))) * Math.sqrt(Math.abs(absX - 1) / (absX - 1));
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

        ctx.fillStyle="rgb(51, 153, 255)";
        ctx.fill();

        ctx.stroke();
    }
};








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