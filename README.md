Test Bondacom JavaScript
 =
 
 
 Microservicio para lectura del clima de la ciudad de buenos aires.
 
 
 Iniciar microservicio
 -
Para iniciar el microservicio se debe inicializar mediante node.js, para ello situe el terminal en el path raiz de la 
aplicacion; posterio a ello ejecute el comando

```npm install
   node app.js 

```
 
 Acceso a los datos del servicio:
 -
 el servicio regresa un string correspondiente a la informacion del estado actual de la ciudad de buenos aires, para ello
 specifique la direccion URL **http://localhost:3000/getCurrentForecast**
 
 La informacion respuesta
 -
 el servicio genera una respuesta con el siguiente patron:
 ***La temperatura en grados celsius de la ciudad de Buenos Aires corresponde a: 21 cuenta con una humedad del 69% y la condicion del dia es Parcialmente nublado la maxima corresponde a: 25 y una temperatura minima de: 21***
 
 