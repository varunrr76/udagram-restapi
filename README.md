# Udagram REST API

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into two parts:

1. [The Simple Frontend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)
   A basic Ionic client web application which consumes the RestAPI Backend.
2. [The RestAPI Backend](https://github.com/VarunRaj7/udagram-restapi/tree/master), a Node-Express server which can be deployed to a cloud service. This also contains the code for [filtering image](https://github.com/VarunRaj7/udagram-restapi/blob/master/src/controllers/v0/filteredimage/routes/filteredimage.router.ts).

---

## Getting Setup

### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. After cloning, open your terminal and run:

```bash
npm install
```

> _tip_: **npm i** is shorthand for **npm install**

---

## Running the Server Locally

To run the server locally in developer mode, open terminal and run:

```bash
npm run dev
```

Developer mode runs off the TypeScript source. Any saves will reset the server and run the latest version of the codebase.

## Master EB Endpoint:

    http://udagram-restapi-dev.us-east-2.elasticbeanstalk.com/

## Acessing the API:

1.  Register with an email id & password:

    An example:

        API: http://udagram-restapi-dev.us-east-2.elasticbeanstalk.com/api/v0/users/auth/

        body:

            {

                "email": "****@gmail.com",
                "password": "********"

            }

    or

    Login with the following credentials:

        API: http://udagram-restapi-dev.us-east-2.elasticbeanstalk.com/api/v0/user/login

        body:

            {

                "email": "tU@gmail.com",
                "password": "tU"

            }

    In Response you will receive JWT:

        Example:

            "token":"eyJhbGciOiJIUzI1NiJ9.dFVAZ21haWwuY29t.4DP1Ilu1n98J8yzuHcjhNAHwdwLnXe-BHNRSBpFOzqV"

    Copy this and use it header of requests while accessing other api's.

2.  Filtering image:

        API: http://udagram-restapi-dev.us-east-2.elasticbeanstalk.com/api/v0/filteredimage?image_url={{image_url_here}}

    Also, attach the token that we received above to this request.

    You should get a filtered image if image is present in image_url else you get an error.
