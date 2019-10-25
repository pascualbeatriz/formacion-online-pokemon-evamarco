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

### Pintar los datos en pantalla

Una vez con los datos en el estado pasé a pintarlos en pantalla de manera sencilla.
Creé una lista desordenada y dentro hice un map para recorrer el array que tengo guardado en el estado. 
Por cada item del array saqué el nombre, la imagen y el listado de tipos, que para poder pintarlos tuve que hacer otro map. 

### Dividir el problema en componentes

Ahora que ya se veía la info que me pedían en pantalla voy a dividir el trabajo en componentes para que sea más facil de reutlizar.

He creado dos componentes:
  - Card -> Con la info de cada uno de los pokemon.
  - List -> Donde hago el map de los elementos del estado. 

### Crear el filtro

He creado un componente Filters para poder tener todos los filtros que queramos hacer en un mismo sitio. 
Aquí introduje un input tipo texto con su label. 
El valor introducido se guarda en el estado y se usa para filtrar el array de resultados. 

### Dar estilos

Ahora que el listado se pinta correctamente y el filtro funciona vamos a dar estilos. 
Hemos usado tanto flexbox como grid.

## Pasos para poder trabajar sobre este proyecto. 

Para poder trabajar sobre este proyecto los pasos a seguir son: 
  - Clonar o descargar el repositorio desde la página de github: https://github.com/Adalab/formacion-online-pokemon-evamarco
  - Una vez creada la carpeta y clonado debemos ejecutar __ npm install __ para que se nos intalen las librerías necesarias para poder ver el contenido. 
  - Una vez las dependencias estén instaladas, si queremos ver el código en pantalla usaremos __ npm start __
  A partir de aquí ya podremos trabajar sobre el código y ver las modificaciones en tiempo real en el navegador. 

  