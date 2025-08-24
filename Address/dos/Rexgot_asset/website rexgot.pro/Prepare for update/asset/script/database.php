<?php
        $servername = "localhost";
        $username = "username";
        $password = "password";

        try {
        $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected successfully";
        } 
        catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
        }
        $conn = new mysqli($servername, $username, $password);
        // Check connection
        if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        }

        // Create database
        $sql = "CREATE DATABASE myDB";
        if ($conn->query($sql) === TRUE) {
        echo "Database created successfully";
        } else {
        echo "Error creating database: " . $conn->error;
        }$conn->close();
        
?>