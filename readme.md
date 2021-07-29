# BrightorMonday challange
This is a basic project that has a C# MVC backend and a typescript react front end.
This project has been developed and deployed on an ubuntu 20.04 with Mysql database.


# Backend
* if running locally ensure to:
    1. install  dot net.
    2. to run `dotnet tool install --global dotnet-ef && dotnet add package Microsoft.EntityFrameworkCore && dotnet add package MySql.Data.EntityFrameworkCore --version 8.0.22 && dotnet add package Microsoft.EntityFrameworkCore.Tools --version 3.1.17 && dotnet add package Microsoft.EntityFrameworkCore.Design --version 3.1.17  && dotnet add package Newtonsoft.Json --version 13.0.1`
    3. to update credentials in `ApplicationDbContext.cs` and create database `brightormonday`.
    4. to run `dotnet ef migrations add InitialCreate && dotnet ef database update`
    5. remeber ` export PATH=$PATH:~/.dotnet/tools`
* to run the project `dotnet run`
* project listens on `http://localhost:5000/`
* ssl is diabled.


# Front end
* Its a minimalistic typescript react project.
* styling bootstrap 5.
* ensure to run `npm install`
* to run the project run `npm run start` 
* front end url `http://Arthur-Kamau.github.io/BrighterMondayChallange`


## observation
 *  product variants and composite products have not been implemented.


# Deployment and testing.
*  the api is hosted in VPS which will be destroyed in a weeks time ip (192.248.161.160)
*  the api can still be tested in you local environment.
*  Use Insomnia Rest Client, the insomnia file (in Insomnia folder ) to test the api or try the githup pages app.
*  to prevent cors error use  `chromium-browser --disable-web-security --user-data-dir="/tmp"`.
*  nginx has been used as a reverse proxy, https has been set up , with domain `https://test.araizen.com/`
