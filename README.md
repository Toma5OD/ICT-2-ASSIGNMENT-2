# Movie App

My name is Tomas O Dalaigh and this is my assignment submission for ICT Skills 2.
My student number is 20095582.

Video: https://youtu.be/nX-5X6pE1SA

This is a Movie and TV show web application with basic React UI and basic functionality.
The application uses The Movie Data Base API to load data for running the application.

The features implimented are listed below

+ Feature 1 - Popular Movies Shown on Home Page.
+ Feature 2 - Ability to save Movies to Favourites.
+ Feature 3 - Ability to filter Movies
+ Feature 4 - Movies Details page with Genre and Gate return etc shown.
+ Feature 5 - Movie Cast shown
+ Feature 6 - Simular Movies Shown
+ Feature 7 - Movie Reviews Shown + ability to review movies
+ Feature 8 - Upcoming Movies Page 
+ Feature 9 - Ability to save upcoming movies to Must Watch page
+ Feature 10 - Must Watch page.
+ Feature 11 - Top Rated Movies page
+ Feature 12 - Popular TV Shows page
+ Feature 13 - TV Shows Details Page
+ Feature 14 - TV Show Cast shown
+ Feature 15 - Popular Actors Page
+ Feature 16 - Actor Details page
+ Feature 17 - Caching of main pages

## To run the app

Download the repo into a folder.
Delete the node modules folder and the package-lock.json file.

Create a .env file with the lines below written to the file.

REACT_APP_TMDB_KEY=<<api key>>

FAST_REFRESH=false

Once this is done run the below commands to build and run the application.

```
cd into the folder root
npm install
npm start
```

the application should now be running locally on 
http://localhost:3000/


+ 1 - Home Pages View
+ 2 - Favourites Page View
+ 3 - Movie Details Page + Movie Cast Feature
+ 4 - Similar Movies Feature
+ 5 - Upcoming Movies Page
+ 6 - Must Watch Page
+ 7 - Top Rated Movies Page
+ 8 - TV Shows Page
+ 9 - TV Show Details Page
+ 10 - Popular Actors Page
+ 11 - Actors Detail Page
+ 12 - Caching code example

### 1. Home Pages View
![][1]
<br/>

### 2. Favourites Page View
![][2]
<br/>

### 3. Movie Details Page + Movie Cast Feature
![][3]
<br/>

### 4. Similar Movies Feature
![][4]
<br/>

### 5. Upcoming Movies Page
![][5]
<br/>

### 6. Must Watch Page
![][6]
<br/>

### 7. Top Rated Movies Page
![][7]
<br/>

### 8. TV Shows Page
![][8]
<br/>

### 9. TV Show Details Page
![][9]
<br/>

### 10. Popular Actors Page
![][10]
<br/>

### 11. Actors Detail Page
![][11]
<br/>

### 12. Caching code example
![][12]
<br/>
Caching is used on all the main pages of the application. This means that the api request is only made once and the cache passes the request back to the page if the page is requested a subsequent time.

Filtering TV shows and the ability to add TV Shows to Favourites is broken.

Enjoy :) 

[1]: ./public/1.png
[2]: ./public/2.png
[3]: ./public/3.png
[4]: ./public/4.png
[5]: ./public/5.png
[6]: ./public/6.png
[7]: ./public/7.png
[8]: ./public/8.png
[9]: ./public/9.png
[10]: ./public/10.png
[11]: ./public/11.png
[12]: ./public/12.png
