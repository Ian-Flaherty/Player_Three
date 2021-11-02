# LYFE - "changing ideas"

## Overview

LYFE is the App you can say yes or no to movies/photos/recipes/whatever you want. If you like them they are saved into your saved profile for you to look at any time. Down the road I will want to put an algorithim in that can make the experience even better for the user by collecting previous information from liked and disliked to calculate what the user would like to see.

## WireFrames

<details>
<Summary>WireFrame</summary>

![alt text](app/readme-assets/wireframes/WireFrame.png)

</details>

<details>
<Summary>Tables</summary>

![alt text](app/readme-assets/wireframes/Tables.png)

</details>

## MVP

Server (Back End)
Have a RESTful JSON API.
Build a Ruby on Rails server, exposing RESTful JSON endpoints.
Build a database with at least 3 tables:
There must be at least 1 association between your tables. (1:m or m:m)
Utilize Rails to define models for interacting with the database.
Implement working generic controller actions for Full CRUD (index, show, create, update, delete) between your non-User tables
Note that if you choose to do Authentication, CRUD on your User table does not count toward this requirement.
Client (Front End)
Have a working, interactive React app, built using npx create-react-app.
Have at least 8 separate, rendered components in an organized and understandable React file structure.
Utilize functional or class React components appropriately.
Utilize state and props in your components efficiently.
Use only React for DOM Manipulation.
Consume data from your Ruby on Rails API, and render that data in your components.
Utilize React Router, for client-side routing.
Demonstrate Full CRUD actions ( index, show, create, update, and delete ) on the front end.
Note that if you decide to implement Auth, your full CRUD actions must be covered amongst your non-User tables.
Styling
Be styled with CSS (or SCSS, if you'd prefer).
Use Flexbox or Grid in your layout design.
Implement 2 media queries for responsive design on 3 screen sizes (including desktop).
Linting
Indent properly.
Utilize high-quality, semantic variable names.
Follow camelCase, snake_case, and kebab-case convention.
Remove unnecessary boilerplate React files and code.
Remove all console.log()s and commented out code (functional notes and comments are okay).
Deployment
Deploy the fully functional front-end via Surge or Netlify.
Deploy the back-end via Heroku.
Deploy early and often(this will help to debug small issues before they become large issues)
Procedural
Initialize a git repo on Github, with a link to your hosted project.
Have frequent commits, making a robust commit history at least every day. (75 commits minimum)
Use effective and safe branching and merging processes.

