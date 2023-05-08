# cs361 CrimeTracker microservice which reads .json file and displays a summary results from the users' US State and Type of Crime filter selections.
Partner will be making his project of a selected location so planning to integrate the two together.

CS361 - Spring 2023
campbeb3
Group32 - Microsevice

Microservice Website location (for partner to link to): 
http://flip2.engr.oregonstate.edu:54545/

Brian's Project Website location:
http://flip2.engr.oregonstate.edu:54555/

JSON Source (only used year 2019 from this file): https://corgis-edu.github.io/corgis/json/state_crime/

Communication Contract:


REQUEST DATA METHOD:

Log into OSU via ODIN username & password

Partner can access Microservice by adding this flip server link to their project: http://flip2.engr.oregonstate.edu:54545/
Alternatively, if parnter wants to add web build to their project, these are the steps I used:

Step 1: Open VPN connection to OSU (vpn.oregonstate.edu) via Cisco AnyConnect Login (ODIN username & pw).

Step 2: Log into a OSU flip server and navigate to your project folder. 

Step 3: Follow "Step 0 - Setting Up Node.js" instructions here: https://github.com/osu-cs340-ecampus/nodejs-starter-app

Step 4: Install Handlebars by running command: "npm i express-handlebars --save"

Step 5: Copy over any needed files (JSON, index.hbs, etc) from this Gitbub account to appropriate folders for your project.
          Identify PORT for flip server you want to use (any number) in app.js
          
          i.e. if just want code, copy from the cs361/public_html/views/index.hbs 
          JSON file located: cs361/public_html/public/json
          
Step 6: Navigate to flip server folder (..\campbeb3\public_html) 
          At bash terminal commands in VSC: 
          "nvm use 16.13.0"
          "alias forever='./node_modules/forever/bin/forever'"
          "forever start app.js"
     


RECEIVE DATA METHOD:

To find Crime data for 2019, the user first selects "State" from drop-down list

The index.hbs file then retreives the Total Crime numbers using KEYS (example key: "Data.Totals.Violent.Assault") 

The data is filtered and displayed on website TABLE for user to reference

Selecting a different State will repopulate table with new data
