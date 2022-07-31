# SPA Angular Blog
## Home Page
***Home Page*** displays the list of all created posts with title, date, author and button which formward you to the post page. You don't need any permission unlike the admin block.
  
## Admin Block
To forward the **Admin block** just add '/admin' to the URL and you will be redirected to login page. Other childer routes are protected vy **guards** (contact me to get the login and the password). After signing you get a *token* for one hour, then you will have to log in again.  
In this block you can see all the existing posts, can open, edit, delete each or create new ones. The app uses **Firebase** to keep the data.  
  
## Source code
Source code available in the '/root'. You can download it, write to your command line "npm install" and run the app to check it locally. Or just forward *the link*: https://ricudo.github.io/Angular_Blog/ to check GitHub deployed version.
