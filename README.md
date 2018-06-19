# Example of CUBA application with Angular frontend

This sample project contains Angular-based front-end with build process integrated in CUBA's gradle build pipeline. 

Angular app is placed in `modules/front` directory.

In development environment it's being deployed in tomcat and available at [http://localhost:8080/front](http://localhost:8080/front)


## Using Angular dev server

Hot deploy for Angular currently is not supported by Studio so to see changes in development time its more convenient to use native Angular tooling. 


Through gradle:

```bash
./gradlew npm_run_start
```


Or, if you have Node.js installed on your machine:

```bash
cd modules/front
npm run start
```

Then you will be able to see your app at [http://localhost:4200/front](http://localhost:4200)