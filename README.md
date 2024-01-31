This repo includes folders:
1 - LaceroApp - react native application
2 - server - Node.js server

Nodejs server have 4 and-points:
- GET "/tasks" - to get list of tasks
- POST "/task" - to create new task
- DELETE "/task/:id" - to delete task by id
- PUT "/task/:id" - to update task by id
By default http server runs onto 3001 port and webSockets run onto 8080 port.

To Run app folow next steps.
- Clone this repo
- Move to server folder and install dependencies for server app
```
cd server && npm install
```
- run nodejs server
```
npm start
```
- move to LaceroApp folder and install dependencies for react native app.
  
```
cd LaceroApp && npm install

```
- install Pods for ios
```
npx pod-install ios 
```
or 
```
cd ios && pod install
```
To start Metro, run:

```
npm start
```

To start app for iOS, run:

```
npm ios
```

To start app for Android, run:

```
npm android
```
