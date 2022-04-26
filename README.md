<img width="1022" alt="Screen Shot 2022-04-25 at 11 02 34 PM" src="https://user-images.githubusercontent.com/55119946/165248496-c14f7b21-a224-45b4-9d71-b981fb6f4000.png">

Built a docker image and used docker run -d -p 3000:3000 grafana to run the sources locally.


<img width="1010" alt="Screen Shot 2022-04-26 at 12 48 49 AM" src="https://user-images.githubusercontent.com/55119946/165249346-2cb45d22-bd0d-44cf-bd6e-c5d0c371431c.png">


Used the command docker run -d -p 3000:3000 grafana/grafana-oss to run the app in production mode.

<img width="1020" alt="Logging2and3" src="https://user-images.githubusercontent.com/55119946/165248431-c74cbd33-133a-4ee3-84d3-44a94b63bd9e.png">

<img width="1284" alt="Screen Shot 2022-04-25 at 10 55 51 PM" src="https://user-images.githubusercontent.com/55119946/165248459-6968a5b6-631b-45d7-860e-c7a5838265d6.png">

Used docker run -d -p 3000:3000 grafana with the updated files

To update the background color on the login page I modified the background css within Branding.tsx to #FFFF00;
To update the app title for the login page I updated the 'App Title' field in Branding.tsx to 'My Test' which only affects the login page's title.  I did not touch any html.
