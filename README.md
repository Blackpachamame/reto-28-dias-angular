<h1 align="center">Reto de los 28 días con Angular - Dominicode</h1>

Durante los próximos 28 días, cada día te voy a enseñar algo nuevo con Angular.

Pueden encontrar la lista con los videos de cada día en el siguiente [enlace](https://www.youtube.com/watch?v=8Fwwhjt3jjE&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0).

## Entregas y Resumen

1. **¿Qué es Angular? e Instalación Angular CLI**
   - Angular es un framework para aplicaciones web desarrollado en Typescript.
   - Instalar Angular CLI: `npm install -g @angular/cli` (requiere tener instalado node.js).
   - Crear un nuevo proyecto: `ng new nombreProyecto`.
   - Acceder a la carpeta del nuevo proyecto: `cd nombreProyecto`.
   - Levantar el servidor de Angular: `ng serve`.
2. **Exploramos Angular APP**
3. **¿Componentes en Angular?**
   - Un componente es un elemento que está compuesto por:
     - Vista: Un Template, que contendrá el HTML para la vista.
     - Lógica: Un Controlador donde se encuentra la lógica, ese archivo debe incluir una clase y esta es la que va a contener las propiedades que se van a usar en la vista (HTML) y los métodos que serán las acciones que se ejecutarán en la vista. En este archivo de lógica también se incluye una metadata.
     - Estilos: Un archivo para el CSS, donde incluiremos los estilos.
     - Testing.
   - Crear un nuevo componente: `ng generate compontent unComponente` o `ng g c unComponente`.
   - También se puede crear dentro de un fichero: `ng g c fichero/unComponente`.
4. **Interpolación {{ angular }} / On way data binding**
   - Enlazar una propiedad que este en nuestro `component.ts` para leerla en el `component.html`, pero no se puede modificar.
5. **Enlace de datos bidireccional / On way data binding**
   - Comunicar componentes _(lo veremos en el reto del día 10)_. Enlazar una propiedad que este en nuestro `component.ts` para tenerla en el `component.html` y modificar su valor simultaneamente.
6. **¿Qué es una directiva? ngIf, ngFor**
   - Las directivas son una serie de elementos que aplicaremos a nuestro HTML como si fuera un atributo, con el fin de añadir una nuevos comportamientos o estilos al DOM.
   - Las directivas estructurales nos permiten cambiar el comportamiento del DOM.
7. **¿Qué son las directivas de atributos? ngClass, ngStyle**
   - Las directivas de atributos nos permiten cambiar los estilos del DOM.
8. **Ciclo de vida de un componente**
9. **Event binding ó (enlace de eventos)**
   - Nos permite responder a las acciones del usuario.
10. **Decorador @Input, ¿Qué es un decorador en Angular?**
    - Los decoradores permiten indicar al framework cómo interpretar un elemento.
    - Con @input podemos modificar el componente padre y ese cambio se lo comunica al componente hijo.
11. Continuará...

## Redes Dominicode

- [Youtube 📺](https://www.youtube.com/c/DominiCode)
- [Website 🌎](https://dominicode.com)
- [Github 📂](https://github.com/domini-code)
- [Twitch 🎥](https://www.twitch.tv/dominicode_live)
