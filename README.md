# cs361 CrimeTracker microservice which reads .json file and displays a summary results from the users' US State and Type of Crime filter selections.
Partner will be making his project of a selected location so planning to integrate the two together.

CS361 - Spring 2023
campbeb3
Group32 - Microsevice

<h1> ABOUT THE DATA BEING USED </h1>
Data is sourced from the 2019 FBI Crime Statistics website: https://ucr.fbi.gov/crime-in-the-u.s/2019/crime-in-the-u.s.-2019
<br>
JSON Source: https://corgis-edu.github.io/corgis/json/state_crime/
<br>
Microservice Website location (JSON data output for partner to GET): 
<br>
http://flip2.engr.oregonstate.edu:54544/state_crime


My Project Website location:
<br>
http://flip2.engr.oregonstate.edu:54555/


<h1> Communication Contract:</h1>

<h2> REQUESTING AND RECEIVING DATA: </h2>

All 50 states are listed as JSON Keys using "State" as primary key and full name of state ie. "Oregon"
<br>
The keys to referene type of crime are: <br>
"Data.Totals.Property" (for property crimes), or "Data.Totals.Violent" (for vilent crimes).
<br>
The variables for violent crimes are: "All", "Assault", "Murder", "Rape", "Robbery"
<br>
The variables for property crimes are: "All", "Burglary", "Larceny", "Motor"
<br>
Partner can access Microservice to get JSON data from: http://flip2.engr.oregonstate.edu:54544/state_crime







