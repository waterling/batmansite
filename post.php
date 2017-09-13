<?php
$start = microtime(true);


$getX = $_POST['x'];
$getX *= 7;
$getY = $_POST['y'];
$getY *= 7;
$zoom = $_POST['zoom'];

$inBatman = 'true';
if (!checkBatman($getX, $getY, $zoom)) {
    $inBatman = 'false';
}


function checkBatman($getX, $getY, $zoom)
{
    if ($getX >= 0 && $getY >= 0) {
        return inFirstQuarter($getX, $getY, $zoom);
    } else {
        if ($getX <= 0 && $getY >= 0) {
            return inSecondQuarter($getX, $getY, $zoom);
        } else {
            if ($getX <= 0 && $getY <= 0) {
                return inThirdQuarter($getX, $getY, $zoom);
            } else {
                if ($getX >= 0 && $getY <= 0) {
                    return inFourthQuarter($getX, $getY, $zoom);
                }
            }
        }
    }
    return false;
}


function inFirstQuarter($getX, $getY, $zoom)
{

    //шапка
    if ($zoom + 1 < $getX and $zoom > $getX) {
        $x = $getX / $zoom ;
        $absX = abs($x);
        $y = 9 - 8 * $absX;
        return $getY <= $y*$zoom;
    }
//    checked
    if ($getX >= 1 * $zoom + 1 and $getX < 3 * $zoom + 1) {
        $x = $getX / $zoom ;
        $absX = abs($x);
        $y = (2.71052 + 1.5 - 0.5 * $absX - 1.35526 * sqrt(4 - ($absX - 1) * ($absX - 1)));
        return $getY <= $y*$zoom;
    }
//    checked
    if ($getX >= 3 * $zoom + 1 and $getX < 7 * $zoom + 1) {
        $x = $getX / $zoom ;
        $absX = abs($x);
        $y = 1.5 * sqrt((-abs($absX - 1)) * abs(3 - $absX) / (($absX - 1) * (3 - $absX))) * (1 + abs($absX - 3) / ($absX - 3)) * sqrt(1 - ($x / 7) * ($x / 7)) + (4.5 + 0.75 * (abs($x - 0.5) + abs($x + 0.5)) - 2.75 * (abs($x - 0.75) + abs($x + 0.75))) * (1 + abs(1 - $absX) / (1 - $absX));
        return $getY <= $y*$zoom;
    }


//checked
    if ($getX < 1 * $zoom and $getX > 0.5 * $zoom) {
        $x = $getX / $zoom;
        $absX = abs($x);
        $y = 1.6 *$absX + 1.4;
        return $y*$zoom >= $getY;
    }
    if ($getX < 0.5 * $zoom and $getX >= 0 ) {
        $y = 2.25;
        return $y*$zoom >= $getY;
    }
}

function inSecondQuarter($getX, $getY, $zoom)
{
//checked
    if ($getX >= -7 * $zoom and $getX < -3 * $zoom - 1) {
        $x = $getX / $zoom ;
        $absX = abs($x);
        $y = 1.5 * sqrt((-abs($absX - 1)) * abs(3 - $absX) / (($absX - 1) * (3 - $absX))) * (1 + abs($absX - 3) / ($absX - 3)) * sqrt(1 - ($x / 7) * ($x / 7)) + (4.5 + 0.75 * (abs($x - 0.5) + abs($x + 0.5)) - 2.75 * (abs($x - 0.75) + abs($x + 0.75))) * (1 + abs(1 - $absX) / (1 - $absX));
        return $getY <= $y*$zoom;
    }
//checked
    if ($getX >= -3 * $zoom and $getX < -1 * $zoom - 1) {
        $x = $getX / $zoom;
        $absX = abs($x);
        $y = (2.71052 + 1.5 - 0.5 * $absX - 1.35526 * sqrt(4 - ($absX - 1) * ($absX - 1)));
        return $getY <= $y*$zoom;
    }


    //шапка
    if (-1 * $zoom - 1 > $getX and -1 * $zoom < $getX) {
        $x = $getX / $zoom ;
        $absX = abs($x);
        $y = 9 - 8 * $absX;
        return $getY  <= $y*$zoom;
    }
//checked
    if ($getX > -1 * $zoom and $getX < -0.5 * $zoom) {
        $x = $getX / $zoom;
        $absX = abs($x);
        $y = 1.6 *$absX + 1.4;
        return $y *$zoom>= $getY ;
    }
    if ($getX >-0.5 * $zoom and $getX <= 0 ) {
        $y = 2.25;
        return $y*$zoom >= $getY;
    }
}

function inThirdQuarter($getX, $getY, $zoom)
{
//    checked
    if ($getX <= -4 * $zoom - 1 and $getX > -7 * $zoom - 1) {
        $x = $getX / $zoom;
        $absX = abs($x);
        $y = (-3) * sqrt(1 - ($x / 7) * ($x / 7)) * sqrt(abs($absX - 4) / ($absX - 4));
        return $getY >= $y*$zoom;

    }
//checked
    if ($getX >= -4 * $zoom and $getX < 0) {
        $x = $getX / $zoom;
        $absX = abs($x);
        $y = abs($x / 2) - 0.0913722 * $x * $x - 3 + sqrt(1 - (abs($absX - 2) - 1) * (abs($absX - 2) - 1));
        return $getY >= $y*$zoom;
    }
    return false;
}

function inFourthQuarter($getX, $getY, $zoom)
{
//    checked
    if ($getX > 4 * $zoom and $getX <= 7 * $zoom) {
        $x = $getX / $zoom;
        $absX = abs($x);
        $y = (-3) * sqrt(1 - ($x / 7) * ($x / 7)) * sqrt(abs($absX - 4) / ($absX - 4));
        return $getY >= $y*$zoom;
    }
//checked
    if ($getX >= 0 and $getX <= 4 * $zoom) {
        $x = $getX / $zoom;
        $absX = abs($x);
        $y = abs($x / 2) - 0.0913722 * $x * $x - 3 + sqrt(1 - (abs($absX - 2) - 1) * (abs($absX - 2) - 1));
        return $getY >= $y*$zoom;
    }

    return false;
}


$time = microtime(true) - $start;
$acTime = date('l jS \of F Y h:i:s A');

echo '<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8" ;>
	<title>Batman</title>
	<link rel="shortcut icon" href="logobatman1.png">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

	<script src="script.js">
	</script>

</head>
<body>
<table width="100%" cellspacing="0" height="100%">
	<tr id="tr-top-header">
		<td width="20%"></td>
		<!--<td > <img src="logobatman.png" width="124" height="60" alt="логотип">  </td>-->
		<td align="right" style="min-width:1170px" colspan="3" width="1170px">
			<img src="logobatman.png" align="left" vspace="10px" width="260" height="60" alt="логотип">
			<p class="text" id="variant">Вариант 13</p>
			<p class="text" id="group">P3211 </p>
			<p class="text" id="name">Юсюмбели В.И.
				Плохотнюк В.С.</p>
		</td>
		<td width="20%"></td>
	</tr>

	<tr id="tr-bottom-header">
		<td width="20%" id="td-bottom-header"></td>
		<td colspan="3" id="td-bottom-header"></td>
		<td width="20%" id="td-bottom-header"></td>
	</tr>
	<tr height="30">
		<td width="20%" rowspan="5"></td>
		<td colspan="3"></td>
		<td width="20%" rowspan="5"></td>
	</tr>

	<tr>
		<td>
		</td>
		<td width="30"></td>
		<td align="center" rowspan="4" colspan="1" id="menu3">
			<table align="center" style="width: 1000px; height: 100px " border="1px">
				<tr>
					<td>
						X
					</td>
					<td>
						Y
					</td>
					<td>
						R
					</td>
					<td>
						Strike
					</td>
					<td>
						Time
					</td>
					<td>
						ProgrammLiveTime
					</td>
				</tr>
				<tr>
					<td>' . $getX / 7 . '

					</td>
					<td>' . $getY . '
					</td>
					<td>' . $zoom . '
					</td>
					<td>' . $inBatman . '
					</td >
					<td >' . $acTime . '
					</td >
					<td >' . $time . '
					</td >
				</tr >
			</table>
			
			<br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> 
			<form>
			    <input type="button" id="btnClose" value="close" onclick="window.close()">
		    </form>
		<br> <br> <br> <br> <br> <br> <br> <br>
			<br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
		</td>
	</tr>

	<tr height="30">
		<td></td>
		<td width="30"></td>
		<td></td>
	</tr>

	<tr>

		<td >
		</td>
		<td width="30"></td>
	</tr>
	<tr height="400px">
		<td></td>
		<td width="30"></td>
		<td></td>
	</tr>
	<tr height="100px">
		<td></td>
		<td width="30"></td>
		<td></td>
	</tr>
	<tr id="tr-footer">
		<td width="20%"></td>
		<td colspan="3"><p style="color:#2aa5a0">&copy; Copyright 2017 ITMO University</p></td>
		<td width="20%"></td>
	</tr>
</table>

</body>
</html>';
?>

