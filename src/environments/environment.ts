// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apikey:"7735461-39b9789c8b75b041649a66b58",
  apiUrl:'https://pixabay.com/api/?key=',
  //firebase deployment
  firebase:{
    apiKey: "AIzaSyAzPvQFhRLcS1UF2-YCjmRHD9UL4eX9yQE",
    authDomain: "pixabayimageapp.firebaseapp.com",
    databaseURL: "https://pixabayimageapp.firebaseio.com",
    projectId: "pixabayimageapp",
    storageBucket: "pixabayimageapp.appspot.com",
    messagingSenderId: "638221988767"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
