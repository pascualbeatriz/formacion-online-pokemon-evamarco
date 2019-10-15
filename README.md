# formacion-online-pokemon-evamarco

## Pasos para resolver este ejericio

### Clonar el repo e instalar react app

Lo primero que hice fue crearme el repositorio de github con el enlace proporcionado. 
Una vez clonado en mi ordenador, entré en la carpeta y me instalé react-router-app.

### Instalar dependencias

Lo siguiente fué instalar dependecias necesarias para el proyecto como Sass, prop types o react-router-dom.

### Limpieza de archivos

Eliminé los archivos que no iba a usar en mi proyecto para que la estructura de ficheros fuera más limpia y ordenada. 

### Investigar la api proporcionada. 

Cuando ya tenía la base lista examiné la api que me han proporcionado. 
Hice un primer fetch y consolee el resultado para poder ver la estructura de los resultados. Lo primero que vi es que la info que necesitaba estaba dentro de un array llamado __ results __ . En este array podemos acceder a los nombres de los primeros 20 pokemon, pero el resto de la info de cada uno esta en una url que nos proporcionan. 
Así que hice un bucle dentro del primer fetch para que me recorriera todos los elememtos que me devolvian y en cada uno de ellos hacer un segundo fetch para obtener la información que me solicitan. 

Una vez llegué hasta aquí, cree un objeto con toda los datos de cada pokemon y los metí en el estado para poder acceder a ellos de forma más fácil. 
