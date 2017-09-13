<?php
$getX = $_POST['coorX'];
$getX *= 7;
$getY = $_POST['coorY'];
$getY *= 7;
$zoom = $_POST['Range'];
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


echo    '<tr>
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
        </tr >'
?>