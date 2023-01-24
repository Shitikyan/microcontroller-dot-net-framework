## how to configure and run the client application

1. After cloning the project open terminal and go to project root directory 
```
cd microcontroller
```
2. first need to configure the PWA part , for this go to pwa-ract-typescript
3. there you can see .env.example rename this file to .env
4. and then just put in file < your network ip >:3000
5. open terminal here and type
```
npm i  
``` 
6. after just run the application
```
npm start
```

## then we need to configure Socket part
1. you need to have Visual Studio , or some other compiler for .net framework
2. open your project in Visual Studio,  (../microcontroller/web-socket-microcontroller)
3. just press start button (it will automaticaly run the web socket server)


## how to use ? 
1. in your laptop open localhost:3000 url
2. with your phone scan the QR


## How I need to connect to wss connection ? 
WSS will not work correct if in your computer, or in virtual machine where this application will be used , secured connection will not ben configured... 
so to fix that part go and configure the ssl certifications and connections issues ... 

[Documentation for configuration secured web socket connection ](https://docs.bentley.com/livecontent/web/ConstructSim%20Work%20Package%20Server%20CONNECT%20Edition%20Update%202%20Setup%20Guide-v3/en/GUID-3191DD33-045A-4366-BA3C-E4E88DDF8B23.html)
