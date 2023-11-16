# Automatically-Check-your-Grades
Automatically sending you a notification if a new grade is out.

INSTALLING VISUAL STUDIO CODE AND NODE JS AND puppeteer LIBRARY IS REQUIRED.
(to install puppeteer packlages to the folder, in the terminal type " npm i puppeteer).


A brief introduction before explaining, 
1.	This is mainly done for GIU students, but can also be used by others.

-For Any University Portal Students including GIU:
       1- Download “IFTTT” Application through apple store, or play store
       2- Create an account on IFTTT, and create a new Applets.
3- You will be redirected to choose “If this” & “then that”
     in the “if this” You will search for “Webhook”
     and “then that” choose notifications.
4- Keep it running, click on “My applets”, and then you will see a triangle icon click on that then documentations. There you will find your IFTT URL and the key.
5- PS. Before all of that you need Visual Studio Code and Install node.js.


2.	For GIU students:

1- In the app.js, line 7, change “USERNAME” to your actual username, and “PASSWORD” with your actual password.
2- At line 18, you will copy your link and past it there, then “{event name} change that with your event name found on IFTTT.
3- Finally, start a new terminal and type in “ node app.js” it should open a window.









