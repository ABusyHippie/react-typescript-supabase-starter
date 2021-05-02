# React TypeScript Supabase Starter

[![React-App-CI](https://github.com/mwolfhoffman/react-jack/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/mwolfhoffman/react-typescript-supabase-starter/actions/workflows/main.yml)


I use React, Redux, TypeScript and a lot of other similar tooling for most of UIs that I build, so I created this starter to reduce the mundane boiler plate for new front end projects. 

This starter includes React, Redux, TypeScript, React-Router, Awilix (A useful DI Container for JS), Bootstrap, and Supabase (an open source firebase alternative). I have also added CI pipeline steps with Github Actions to install dependencies, run tests, etc. 

This is how I like to set up a React project. I'll do my best to keep this up to date with latest releases, but if you enjoy using the tooling mentioned above, feel free to clone this and use it as a UI template. It should be very easy to switch Supabase out for Firebase or your own API.


## Features:
- React-Bootstrap installed and set up.
- Sample DI Container using [awilix]("https://github.com/jeffijoe/awilix"). (LoggerService in `/services` directory is an example singleton. It is called when `dashboard.tsx` renders).
- Redux for State Management with sample store set up. 
- Jest + React Testing Library for Unit Testing.
- Realtime DB support using Supabase

## To Run: 

- Create a project in the Supabase dashboard and add Anon Key and API URL to `.env` file. (this is already gitignored). Use the `.env.example` for reference.

- Install modules and start dev server: 
    ```
    yarn install
    yarn start
    ```

- To Run tests:
    ```
    yarn test
    ```
