# Lights Web Client
Web client for recreating stranger things lights for halloween with raspberry pis plus a ui for directly controlling outlets

## depends on
Lights Server - https://github.com/jgiuffrida/lights-server

## running
`npm start`
- launches express.js server listening at port 9000
- default screen is the message ui
    - provides ability to send messages
    - displays current message queue with progress percentage
- /debug 
    - provides a listing of controllable outlets
    - updated with outlet state in realtime