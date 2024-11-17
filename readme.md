# Axios refresh multiple parallel requests

> This project was developed in response to feedback and discussions on this [gist](https://gist.github.com/Godofbrowser/bf118322301af3fc334437c683887c5f) 

**Background:** 
When the index page loads, you may encounter two alert dialogs. These are triggered by unauthorized request errors, caused by attempts to access the API with an invalid token. The application then automatically initiates a refresh token request to retrieve a new authentication token. Once the new token is obtained, the previously failed requests are retried with the updated credentials. Upon successful execution, the requested data is retrieved and seamlessly displayed on the webpage.

You can tweet [@godofbrowser](https://twitter.com/Godofbrowser) if you need to ask a question about this 

## Installation
 
### Clone the repository
```
git clone https://github.com/Godofbrowser/axios-refresh-multiple-request.git
```

### Install dependencies
```
npm i

// or 

yarn
```

### Start the build
```
npm run dev

// or 

yarn dev
```

### Start the demo api server
```
npm run serve

// or 

yarn serve
```

