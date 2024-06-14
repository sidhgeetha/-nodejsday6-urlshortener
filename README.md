## front end code- user regitstration, password reset process ##

Front-end code using React, Axios, and React Router DOM - user registration .
Folder structure
├── components/
 -resetpassword.jsx
 -setnewpassword.jsx
 -userlogin.jsx
 -useregister.jsx

 ├── src/
   - App.jsx

## backend ##
1.Connected to cluster with compass and connet to DB using conection string.

2.sed libraries mongoose, expressjs for connecting db.

3.USed Express library to build your application server(app.js file) and connect to the database

4.Backend project setup with Nodejs + expressjs + mongoDB



1. User get registered
2. User login with email, password
3. After successfull login , user directs to 'urlshortener page'
4. User give long url in search bar , clicks 'shorten url' button
5. Handle submit function called and and long URL send back to backend using POST method .
6. Backend process the long URL and returnes original and the shortened URL.
7. Front end receives new shortened URL.
8. The frontend updates the UI to display the list of shortened URLs along.




Front end URL:
https://main--cerulean-raindrop-2dcc3f.netlify.app/register     
 https://main--cerulean-raindrop-2dcc3f.netlify.app/login          
 https://main--cerulean-raindrop-2dcc3f.netlify.app/url-shortener

Backend URL:
https://nodejsday6-urlshortener.onrender.com


User register:
![alt text](image-6.png)

User login
![alt text](image-1.png)

url shortener
![alt text](image-7.png)
