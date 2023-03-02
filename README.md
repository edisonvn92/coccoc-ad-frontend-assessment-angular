# CoccocAdFrontendAssessmentAngular
This project is developed using Angular

## Version
- NodeJS: 18.14.2
- Angular: 15.2.0.


## Install package
- If local NodeJS version is different, install nvm to manage NodeJS version (https://github.com/nvm-sh/nvm)
- Run `npm install` to install packages

## Local Development
- Run `npm run start` to create local server.
- This project is currently using local backend to run APIs. Open repo  `coccoc-assessement-backend` and follow the instruction in `README.md` to run local backend server before continue testing
- Navigate to `http://localhost:4200/`.

## Build
Run `npm run build` to build the project. The build artifacts are stored in the `dist/` directory.

# Feature details
- When navigate to `http://localhost:4200/`, the site automatically navigate to `http://localhost:4200/auth/login`
- Enter email and password in order to login
- Click the eye icon to show or hide password
- If email or password is not filled, the button is disabled
- If any input is typed then emptied, an error is showed
- If email or password is incorrect, when click button an error is showed
- Once logged in successfully, the site is navigated to `http://localhost:4200/home` which shows the success message
- The user info is saved to local storage, while the token is saved to session storage. If logging out is required, exit the page and enter again
- If remember my account is selected, the email and password is saved to local storage and next log in is autofilled with the old log in
- The home page can't be accessed without logging in, the site will automatically navigate to `http://localhost:4200/auth/login` if it's not logged in
- Log in page can't be accessed after logging in, the site will automatically navigate to `http://localhost:4200/home` if it's already logged in
