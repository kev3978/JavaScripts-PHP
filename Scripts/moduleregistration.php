<?php
session_start();
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">


<head>
    <link rel="stylesheet" type="text/css" href="main2.css">

    <title>Module Registration</title>
	<meta charset="UTF-8">
	<!--Font taken from google fonts-->
    <link href='http://fonts.googleapis.com/css?family=Reenie+Beanie%7CCourgette%7CCookie' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
 
</head>
<body>
    
<div class="banner">
    <div class="banner_content">
        <p>Kevin Johnston</p>
    </div>  
</div>

<div class="mainBody">


<div class="Navigation_bar">

    <ul class="navbar">
        <li><a href="index.html">About Me</a></li>
        <li><a href="uni.html">University Assignments</a>    </li>
        <li><a href="jquery.html">Jquery Tests</a></li>
        <li><a href="ContactMe.html">Contact Me</a></li>
    </ul>
    
    
</div>
    

<div id="wrap">
<div id="leftContent">
    <h3><b>Javascript</b></h3>
    <ul>
    <li><a href="fortune.html">Fortune Teller</a></li>
    <li><a href="conversions.html">Currency Converter</a></li>
    </ul>
    <h3><b>Perl</b></h3>
    <ul>
    <li><a href="palindrome.html">Palindrome Checker</a></li>
    <li><a href="ratings.html">Page Rater</a>
    </ul>
    <h3><b>PHP</b></h3>
    <ul>
    <li><a href="moduleregistration.php">Module Registration Page</a></li>
    </ul>
    


</div>
    
<div id="rightContent">
    <h1>Module Registration Form</h1>
<?php
//Set connection to database up
$db = mysql_connect("mysql", "****","*********");
mysql_select_db("****");


//Find how many seats remain in each class/session
$session1=8-(mysql_num_rows(mysql_query("SELECT * FROM students WHERE session='1'")));
$session2=8-(mysql_num_rows(mysql_query("SELECT * FROM students WHERE session='2'")));
$session3=8-(mysql_num_rows(mysql_query("SELECT * FROM students WHERE session='3'")));
$session4=8-(mysql_num_rows(mysql_query("SELECT * FROM students WHERE session='4'")));


//Execute if standard form is submitted (i.e. new user)
if(isset($_POST["submit"])) {
		
	//Extract the form variables
	$f_name=$_POST["f_name"];
	$l_name=$_POST["l_name"];
	$sid=$_POST["sid"];
	$email=$_POST["email"];
	$session=$_POST["session"];
	
	
	//Set the session variables to be used after user prompts
	$_SESSION['$f_name'] = $f_name;
	$_SESSION['$l_name'] = $l_name;
	$_SESSION['$sid'] = $sid;
	$_SESSION['$email'] = $email;
	$_SESSION['$session'] = $session;

	

	//Check if the student is already registered
	$check="SELECT * FROM students WHERE sid='$sid'";
	$test=mysql_query($check);
	
	//Number of rows matching the student id (primary key) 
	$count= mysql_num_rows($test);
	
	//If less than one row (should only be 1 OR 0 thought), then create a tuple for this student
	if ($count<1) {
		//The query to run to insert the student		
		$insert="INSERT INTO students  VALUES('$f_name','$l_name','$sid','$email','$session')"; 
		
		//Run and close query
		mysql_query($insert);    
		mysql_close();

		echo"<h3>Thank you. Your session has been booked.</h3> \n";

		echo'<p><a href="moduleregistration.php">Back to registration</a></p>' . "\n";

	}
	
	//If not, then their details are already on the system.
	else {
		$sessionCheck=mysql_query("SELECT session FROM students WHERE sid='$sid'");
		$currentBookingRow=mysql_fetch_row($sessionCheck);
		$currentBooking=$currentBookingRow[0];
		//close mysql connection
		mysql_close();
	?>
		
		<!--Form to check if a change in details is wanted-->
		<form action="registration.php" method="post">
		<h3>Your student number already appears in our database, and you are booked into session <?php echo $currentBooking; ?>, would you like to change this?</h3>
		<select name="correction">
			<option value="1">Yes</option>
			<option value="0">No</option>
		</select>
		<input type="submit" name="doChange" />
		</form>
		
		<?php
	}
}

//If the user said yes to altering their details
elseif (isset($_POST["doChange"])) {

	//Recollect the session variables
	$correct=$_POST["correction"];
	$session=$_SESSION['$session'];
	$sid=$_SESSION['$sid'];
	$email=$_SESSION['$email'];
	$f_name=$_SESSION['$f_name'];
	$l_name=$_SESSION['$l_name'];
	
	//If the user said yes to altering details, being that process
	if ($correct==1) {
		$update="UPDATE students SET session='$session', email='$email', f_name='$f_name', l_name='$l_name' WHERE sid='$sid'";
		mysql_query($update);
		mysql_close();
		
		echo "<h3>Thank you, your details have been amended</h3>";
		echo "<p style='text-align:center'><a href='registration.php'>Back to registration form</a></p>";
	}
	//Otherwise, do nothing, tell the user nothing has changed.
	else {
		echo "<h3>Your details have stayed the same</h3>";
	}		
}


else {?>

	<p style="text-align:left">Here you can enter your details to register for sessions. All fields must be completed.</p>
	<p style="text-align:left">The students registered to each session can be viewed by clicking the appropriate link below.</p>
	<form action="registration.php" method="post">
	<table class="RegistrationTable" >
		<tr>
			<td>First Name:</td> <td><input type="text" name="f_name"  required /></td>
		</tr>
		<tr >
			<td>Last Name:</td> <td><input type="text" name="l_name" required /> </td>
		</tr>	
		<tr>	
			<td>Student ID:</td> <td><input type="text" name="sid" pattern="[0-9]{9}"  placeholder="9 digit number"  required /> </td>
		</tr>	
		<tr>	
			<td>Email :</td> <td><input type="email" name="email" placeholder="e.g.email@liv.com" required /> </td>
		</tr>	
		<tr>
			<td>
			Session:
			</td>
			<td>
			<select name="session">
						<option value ="1" <?php if ($session1==0)  echo "disabled"; ?>>Session 1 <?php echo "&nbsp; ".$session1." Seats remaining";?></option>
						<option value ="2" <?php if ($session2==0)  echo "disabled"; ?>>Session 2 <?php echo "&nbsp; ".$session2." Seats remaining";?></option>
						<option value ="3" <?php if ($session3==0)  echo "disabled"; ?>>Session 3 <?php echo "&nbsp; ".$session3." Seats remaining";?></option>
						<option value ="4" <?php if ($session4==0)  echo "disabled"; ?>>Session 4 <?php echo "&nbsp; ".$session4." Seats remaining";?></option>
			</select>
			</td>
		</tr>
		<tr>
			<td><input type="submit" name="submit" /></td> <td><input type="reset" /></td>
		</tr>
	</table>
	</form>
	<p style="text-align:left"><a href="reglists.php">List of students already registered</a></p>
	<?php
}
?>

</div>
</div>
    
<hr>
    
<div id="footer">
<p style="text-align:center;color:#c6c6c6">Kevin Johnston</p>
<p style="text-align:center;color:#c6c6c6">University of Liverpool</p>
</div>
</div>
</body>
