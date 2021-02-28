# Notes for Project In general



/ { /* third task. Now I want to be able to run a calculator function that runs that sets state to a new calculated value. */ }
// { /* fourth task. Create a new file for storing all api functions and let them sleep in there. */ }
// { /* fifth task.  Go back and make sure that the mvp is complete. */ }
// { /* sixth task. Testing is not necessary at this point because all the data is about to be replaced for database functionality. so we will be expecting the functionality of all our api routes and data our calculator function takes in to change once a db gets involved. */ }

// { /* No testing until this point. Now we test */ }


  {/*list of values that need to be calculated right off the bat. */}
    {/* I need the create function to also send out a start time for the diet */}
    
    {/* calories that I would like to lose inside of my goal */}
    {/* once I have the start date calculated I then need to figure out the difference between the current wieght and the weight goal */}
    {/* once I have the weight I will then calculate the amount of calories inside of that weight using fat. */}
    
    {/* calculate the difference  */}
    {/* My next step in this process would be for me to calculate the deficate from mcalories and ccalories */}
    {/* With that value. what is next would be for me to take total calories to lose and divide it my the deficate*/}
    {/* That should be able to return the amount of days, however will leave hours. minutes and seconds as a afterthought */}

    {/* takes start date that is created from the form automatically*/}
    {/* takes in the calculated expected end date*/}

    {/* returns a percentage for how long it will take to reach goal */}
    {/* return the number of days, hours, minutes and seconds that it will take to reach goal */}


    {/* I would also fromm the users perspective be able to see how many calories have been burned */}
    {/* I would like to be able to see how much weight has been lost from the start day to the current day */}
## Features

# Surface level 

I would like to create a app that hands out advise based on the a users goal, their current muscle index and their BMI and budget.
The user should also be able to input back how much exercise they are currently doing so that. can be factored aswell inside of the app.


I would like to be able to tell a user how many days it would take them to achieve their goals on their current directory.

### Notes On Work Flow.

#### How To Manage Commits. When I am managing commits. I plan to work with 3 layers of branches. The main branch(always functional always presentable). The dev branch(merge branch). The feature branch( This is where I plan on building functions)

# Tasks For MVP(Must Do)

## Create and style home page

## Create and style form page

## Create and style output page(uses id for now)

## Setup function for anayzing BMI and calories

## Link BMI and colorie calculator function to run on post in the form page

# Make sure that the data is displayed inside of the output page.

# Task

## Create a database.(create seeds and migrations as if there will be multiple users.). But the user should be able to perform database functions without any authentication(for the first user.)

## Create user login

## Create user authenticated routes. We should now only be able to edit the data for the user.
## test that the d

# MVP

#### As a minimum viable product what features I would like

###### Feature 1: I will need the user to be able to input their BMI and current weight. The Api will need to be able to communicate with the functions communicate with a script file. 

For now I will just do this using id parameters inside of the url.


###### Feature 2: I will now need a way to process the data that has been given to me. Take in BMI and weight with the maintenence calories of the user and
the calorie defict. This data will be return the number of days that the user will take to be able to reach their weight loss goals.

###### Feature 3
The analyzed data will now need a way to be able to communicate with a new web page and load a the days.


# Sprints

### In order of priority

##### Create a system of being able to store user data, so they may view their current goal.

##### user should be able to remove their current goal.
##### the user should be able to edit their current goal.
##### There should be a cheat day function that should add calories onto the users current calores and extend the timer.

##### A timer that shows how long off the user is from their goals.

##### A second data analyzing function takes in the maintence and from the maintenence will return back to us the ratio of macros that we should eat. With the more steep the deficate the more protein and fats we will suggest that we have the user eat.

##### Inside of the API instead of showing in text form. make it so that the ratio of foods is displayed in pie graph form instead of text.









# Starter Pack notes

# A starter webpack project for React

This is a starter project that uses webpack to transpile and bundle ES6 React code. To use, consider these steps:

* Fork this repo
* Rename your repo according to the app you're building

```sh
git clone https://github.com/[your-account]/[your-app].git
cd [your-app] && npm i
```

To start the development server with a watcher that rebuilds your code, run `npm run dev`. The assets built by webpack are placed in `server/public`. This folder is defined as a static folder in an Express.js server that can be started with `npm run server`.

Additional components should be placed in `client/components`.

## Separate client/server

The boilerplate is also set up to host the client using `webpack-dev-server` with hot module reloading etc. To use this method, in one terminal run:
```sh
npm run client
```
and in the other:
```sh
npm run server
```
The client will be available on http://localhost:8080 and the server on http://localhost:3000. Note that you will still need to manage CORS between the two, as they are on different ports.

