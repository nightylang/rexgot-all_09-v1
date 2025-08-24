<?php

$conn = mysqli_connect("localhost:3306", "rexgwrbt_langpro", "jrQyshspQK3HRhg", "rexgwrbt_languser");

if($conn){
    echo "connected";
}else{
    echo "not connected";
}


if ($conn->connect_error){
    echo("Connection failed: ".$conn->connect_error);
}


?>