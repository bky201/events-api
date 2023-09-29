# My-events Social Media
My-events project is a Full Stack website built using Django Rest framework and Reactjs. This website is built to enable users to share and post photos of special events online and make reactions to other posts. Users need to register an account in order to share their photos. When a user registered, an account is creatted with a user profile that will be dedicated for the user to upload profile biography and profile image. Users can then upload and share their photos and make reviews on others uploaded photos that belong to another user. 

[Live Project Available Here](https://myeventapi-myeventapp-d4a980e19c38.herokuapp.com/)

<p align="center"><img src="./readme/websiteimages/mockup.png"
        alt="Hotel room booking webpage on multiple devices"></p>

## Table of Contents
* [My-events Social Media](#my-events-social-media)
* [Table of Content](#table-of-contents)
* [Backend Django-Rest-Framework](#backend-django-rest-framework)
* [Main Goals](#main-goals)
* [Agile Methodology Plane](#agile-methodology-plane)
  * [Epics](#epics)
  * [User Stories](#user-stories)
* [API Endpoints](#api-endpoints)
* [Frontend React-js](#frontend-react-js)


## Backend Django-Rest-Framework 
Django Rest Framework is the backend API service used for [Events Social Media](https://github.com/bky201/events-api.git). This section is mainly used for data storage, receiving requests from the client side and sending back a responses to client/webpage to render the webpage.


## Main Goals

The main goal of this website is to develop social media website that can provide event's photo sharing with other users online and get back rating and reviews other users. This can make it easy for users to follow up their freinds and get more information about users they follow. The site provides users with all the necessary information on user profile and rating and reviews.

## Agile Methodology Plan 

The foundation of this project is built upon Agile methodologies, where each feature block is delivered during a specific sprint. This project consists of two sprints, with stories being allocated to epics for better organization. The workflow is managed through a [Kanban board](https://github.com/users/bky201/projects/12) created using GitHub Projects. It's worth noting that all stories come with a comprehensive set of well-defined conditions or requirements that must be met for a user story to be considered complete and ready for evaluation or acceptance. 

![Agile image](./readme/websiteimages/agileapi.png)

### Epics

**Set Up**

This epic encompasses all the initial preparations needed to set up the Django application and Django REST Framework, laying the foundation for the development of project features.

**Artists**

This epic includes the creation of all API endpoints and database connections required for implementing the CRUD (Create, Read, Update, Delete) functionality for users who register as Artists.

**Comments**

This epic encompasses the development of all API endpoints and database connections necessary for implementing CRUD (Create, Read, Update, Delete) functionality for user comments in the context of posts.

**Posts**

This epic includes the creation of all API endpoints and database connections required for implementing CRUD (Create, Read, Update, Delete) functionality for user posts, which also encompasses handling like activities.

**Profiles**

This epic encompasses the development of all API endpoints and database connections necessary for implementing CRUD (Create, Read, Update, Delete) functionality for user-created profiles, which also includes the functionality for following other users.

**Reviews**

This epic includes the development of all API endpoints and database connections required for implementing CRUD (Create, Read, Update, Delete) functionality for Artist reviews and the calculation of an average rating, which is displayed on user profiles.

<hr>
<br>

### User Stories

**Based on Epics** 

**Setup**

* As a developer I can set up a new project environment so that it is ready for developing in a separate environment.

* As a developer I can deploy the website into heroku so that it is available and accessible online.

**Profiles API**

* As a developer I can build a user profile so that I can assign it a default image profile.

* As a user I can list all profiles so that I can view and interact with available profiles content.

* As a user I can edit a profile so that I can add content to my profile.

**Posts API**

* As a user, I want to create a post so that I can add post to list of posts online.

* As a user, I want to manage a post so that I can edit or delete a post.

* As a user I can add and edit a comment so that I can interact to posts.

**Likes API**

* As a user, I want to like a post so that I can express my appreciation for content.

**Followers API**

* As a user, I want to follow a user so that I can get new content from the user instantly.

**Artists API**

* As a developer, I want to create artists api views so that users can follow.

**Contact API**

* As a developer, I want to create message API view so that users can contact the site owner with issues.

**Review API**

* As a user, I want to rate an artist so that users can share my rating and review.

## API Endpoints

User Story:

    As a developer I can set up a new project environment so that it is ready for developing in a separate environment.

Implementation:

The initial project setup involved creating a base project and establishing a virtual environment with all the necessary packages installed and then freezing these packages into the requirements.

Additionally, the settings were modified to conceal any sensitive variables and to distinguish between the development and production environments.

User Story:

    As a developer I can deploy the website into heroku so that it is available and accessible online.

Implementation:

The initial project was deployed and hosted on Heroku to make the website accessible online. This allowed to track and address errors at an early stage of development.

User Story:

    As a developer I can build a user profile so that I can assign it a default image profile.
<br>

    As a user I can list all profiles so that I can view and interact with available profiles content.


Implementation:

  | Methods| Endpoint   | purpose  |
  | -------|:----------:| -----|
  | POST   | /profiles/ | Create user profile  |
  | GET    | /profiles/ | Retrieve a list of profiles |


    As a user I can edit a profile so that I can add content to my profile.

Implementation:

  | Methods| Endpoint   | purpose |
  |-------|:----------:| -----|
  | GET   | /profiles/`<int:pk>`/ | view a profile  |
  | PUT   | /profiles/`<int:pk>`/ | update a profile |
  | DELETE| /profiles/`<int:pk>`/ | delete a profile |


User Story:

    As a user, I want to create a post so that I can add post to list of posts online.

Implementation:

  | Methods| Endpoint   | purpose  |
  | -------|:----------:| -----|
  | POST   | /posts/ | Create a post  |
  | GET    | /posts/ | Retrieve a list of posts |

User Story:

    As a user, I want to manage a post so that I can edit or delete a post.

Implementation:

  | Methods| Endpoint   | purpose |
  |-------|:----------:| -----|
  | GET   | /posts/`<int:pk>`/ | view a post  |
  | PUT   | /posts/`<int:pk>`/ | update a posts |
  | DELETE| /posts/`<int:pk>`/ | delete a posts |


User Story:

    As a user, I want to like a post so that I can express my appreciation for content.

Implementation:

  | Methods| Endpoint   | purpose  |
  | -------|:----------:| -----|
  | POST   | /likes/ | Create a like  |
  | GET    | /likes/ | Retrieve a list of likes |
  | DELETE| /likes/`<int:pk>`/ | remove a like |


User Story:

    As a user, I want to follow a user so that I can get new content from the user instantly.

Implementation:

  | Methods| Endpoint   | purpose  |
  | -------|:----------:| -----|
  | POST   | /follows/ | Create a follow  |
  | GET    | /follows/ | Retrieve a list of follow |
  | DELETE| /follows/`<int:pk>`/ | remove a follow |

User Story:

    As a developer, I want to create artists api views so that users can follow.

Implementation:

  | Methods| Endpoint   | purpose  |
  | -------|:----------:| -----|
  | POST   | /artists/ | Create an artist  |
  | GET    | /artists/ | Retrieve a list of artists |
  | PUT   | /artists/`<int:pk>`/ | update an artists |
  | GET   | /artists/`<int:pk>`/ | view an artists  |
  | DELETE| /artists/`<int:pk>`/ | remove an artist |


User Story:

    As a developer, I want to create message API view so that users can contact the site owner with issues.

Implementation:

  | Methods| Endpoint   | purpose  |
  | -------|:----------:| -----|
  | POST   | /contacts/ | Create a contact  |
  | GET    | /contacts/ | Retrieve a list of contacts |
  | PUT   | /contacts/`<int:pk>`/ | update a contact |
  | GET   | /contacts/`<int:pk>`/ | view a contact  |
  | DELETE| /contacts/`<int:pk>`/ | remove a contact |


User Story:

    As a user, I want to rate an artist so that users can share my rating and review.

Implementation:

  | Methods| Endpoint   | purpose  |
  | -------|:----------:| -----|
  | POST   | /reviews/ | Create a review  |
  | GET    | /reviews/ | Retrieve a list of reviews |
  | PUT   | /reviews/`<int:pk>`/ | update a review |
  | GET   | /reviews/`<int:pk>`/ | view a review  |
  | DELETE| /reviews/`<int:pk>`/ | remove a review |


## Frontend React-js 