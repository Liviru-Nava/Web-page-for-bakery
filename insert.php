<?php
  include 'connection.php'; // include database connection file to this file to make database connection


  $firstname = "";
  $lastname = "";
  $gender = "";
  $email = "";
  $contactno = "";
  $address = "";
  $DOB = "";
  $skills = "";

  // html eken gatta values post method eka hara varibles walata asign karagannawa
  $firstname = $_POST['firstname'];
  $lastname = $_POST['lastname'];
  $gender = $_POST['gender'];
  $email = $_POST['email'];
  $contactno = $_POST['contactno'];
  $address = $_POST['address'];
  $DOB = $_POST['DOB'];
  $skills = $_POST['skills'];



  // after that we can pass that varibles to html query to insert data to the database

  $sql = "INSERT INTO registration (FirstName, LastName, Gender, Email,Contact, Address, DOB, Skills) VALUES ('$firstname', '$lastname', '$gender', '$email','$contactno', '$address', '$DOB', '$skills')";

  if (mysqli_query($conn, $sql)) {

    header("Location: Thank_you.html");
    exit;
  } 
  else {
    echo "Error:" .$sql. "<br>" .mysqli_error($conn);
  }

  mysqli_close($conn);
  
?>