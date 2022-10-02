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
   - Las directivas son una serie de elementos que aplicaremos a nuestro HTML como si fuera un atributo, con el fin de añadir nuevos comportamientos o estilos al DOM.
   - Las directivas estructurales nos permiten cambiar el comportamiento del DOM.
7. **¿Qué son las directivas de atributos? ngClass, ngStyle**
   - Las directivas de atributos nos permiten cambiar los estilos del DOM.
8. **Ciclo de vida de un componente**
9. **Event binding ó (enlace de eventos)**
   - Nos permite responder a las acciones del usuario.
10. **Decorador @Input, ¿Qué es un decorador en Angular?**
    - Los decoradores permiten indicar al framework cómo interpretar un elemento.
    - Con @Input podemos modificar el componente padre y ese cambio se lo comunica al componente hijo.
11. **Decorador @Output**
    - El decorador @Output() en un componente (o directiva) hijo permite que los datos fluyan del hijo al padre.
    - Cuando usamos el decorador @Input se utiliza `[ ]` para indicarle al componente hijo el valor que se esta pasando, en cambio el decorador @Output utiliza `( )` para capturar el valor emitido y pasárselo al método que tiene el componente padre.
12. **Mecanismo de detección de cambio Angular (Change Detection)**
    - El change detection es el mecanismo o estrategia de detección de cambios que utiliza Angular para saber cuando debe actualizar un componente o toda la vista en caso de que la data haya cambiado.
    - Los cambios pueden producirse por:
      - Eventos del mouse
      - Llamadas Ajax
      - SetInterval
      - SetTimeOut
    - Estrategias:
      - Default: establece la estrategia en CheckAlways
      - OnPush: establece la estrategia en CheckOnce (bajo demanda)
    - En este día aprendimos a cómo establecer una estrategia en cada componente con un @Input o @Output para que Angular solo renderice ese componente cuando se actualiza, en lugar de renderizar toda la página.
13. **¿Cómo crear un Pipe personalizado en Angular?**
    - Los pipes son una herramienta de Angular que nos permite transformar visualmente la información, por ejemplo, cambiar un texto a mayúsculas o minúsculas, o darle formato de fecha y hora. El valor de la información transformada no cambia, sólo lo hace su aspecto.
    - Crear un nuevo pipe: `ng generate pipe nombrePipe` o `ng g p nombrePipe`.
    - También se puede crear dentro de un fichero: `ng g p fichero/nombrePipe`.
14. **Formularios En Angular**
    - Angular nos brinda dos enfoques distintos a la hora de trabajar con formularios:
      - Template-driven forms: Ideales para crear formularios sencillos.
      - Reactives forms: Los formularios reactivos son más robustos y escables.
15. **Configuración de rutas**
    - Se encargan de la navegación de un componente a otro.
    - Pasan parámetros
    - Redireccionan
    - Protegen rutas (guards)
    - Crear un nuevo componente si exite mas de un módulo: `ng generate component nombreComponente --module app.module` o `ng g c fichero/nombreComponente --m app`.
16. **Rutas hijas, párametros y QueryParams**
17. **Guardianes en Angular (Guards)**
      - Nos ayudan a proteger una determinada ruta. Se ejecutan antes de cargar una ruta y determinan si se puede cargar dicha ruta o no.
      - Crear un nuevo guard: `ng generate guard nombreGuard` o `ng g g fichero/nombreGuard`.
      - Existen 4 tipos de guards:
         - CanActivate: Antes de cargar los componentes de la ruta.
         - CanLoad: Antes de cargar los recursos (assets) de la ruta.
         - CanDeactivate: Antes de intentar salir de la ruta actual (usualmente utilizado para evitar salir de una ruta, si no se han guardado los datos).
         - CanActivateChild: Antes de cargar las rutas hijas de la ruta actual.
18. **¿Para sirve un Resolver en Angular?**
      - Interface que las clases pueden implementar para ser un proveedor de datos. 
      - Se debe usar con el router para resolver datos durante la navegación. 
      - Se debe implementar un método resolve() que se invoca cuando comienza la navegación. 
      - El router espera a que se resuelvan los datos antes de que finalmente se active la ruta.
19. **Lazy loading**
      - Retrasa la carga de un módulo hasta que nuestra aplicación lo necesita.
20. **forRoot & forChild**
      - forRoot: Se utiliza para poner todas las rutas en el modulo principal (raiz).
      - forChild: Se utiliza bajo demanda (lazy loading).
21. **¿Cómo hacer una peticion HTTP en Angular? CRUD**
      - HttpClient es un cliente con los verbos REST, y está basado en Observables.
      - Crear un nuevo servicio: `ng generate service unServicio` o `ng g s unServicio`.
22. **HTTP Interceptor**
      - Interceptar peticiones HTTP para modificarlas.
      - Crear un nuevo interceptor: `ng generate interceptor nombreInterceptor` o `ng g interceptor unFichero/nombreInterceptor` (El aliad "i" es para interface).
23. **¿Qué es un Observable? Diferencias entre Promesa y Observable**
      - Los Observables son colecciones o secuencias de eventos continuos ordenados en el tiempo.
      - Programación Reactiva: La es programación orientada al manejo de streams de datos asíncronos y la propagación de los cambio.
      - Promesa:
         - Se ejecuta inmediatamente
         - Emite un solo valor
         - Envía los errores a la promesa hija
         - Usa la cláusula `.then()`
      - Observable:
         - No comienza hasta la suscripción
         - Múltiples valores a lo largo del tiempo
         - Proporciona operadores
24. **Content Project en Angular (proyección de contenido en Angular)**
      - La proyección de contenido es un patrón en el que inserta o proyecta el contenido que desea usar dentro de otro componente.
      - Por ejemplo, podría tener un componente Tarjeta que acepte contenido proporcionado por otro componente.
25. **Elementos ng-container & ng-template**
      - NG-TEMPLATE:
         - El elemento ng-template de Angular define una plantilla que no se representa de forma predeterminada.
         - Puede definir el contenido de la plantilla que Angular solo representa cuando usted, directa o indirectamente, le indica específicamente que lo haga, lo que le permite tener un control total sobre cómo y cuándo se muestra el contenido.
      - NG-CONTAINER:
         - Un elemento especial que puede contener directivas estructurales sin agregar nuevos elementos al DOM.
         - Nos permite usar directivas estructurales sin ningún elemento adicional, asegurándonos de que los únicos cambios de DOM que se aplican son los dictados por las propias directivas.
26. **ViewChild**
      - Es un decorador de propiedades que configura una consulta de vista.
      - El detector busca el primer elemento o directiva que coincida con el selector en la vista (DOM).
      - Si el DOM cambia y un elemento secundario nuevo coincide con el selector, la propiedad se actualiza.
27. **Continuara...**

## Otros Datos

- **API CrudCrud:** El enlace a esta API debe actualizarse diariamente ya que es la versión gratuita. Para esto, vamos a la página [CrudCrud](https://crudcrud.com) y copiamos el nuevo enlace. Luego reemplazamos en enlace anterior en nuestro archivo `environment.ts`.

- **Advertencia Molesta:**

```warning NG8107: The left side of this optional chain operation does not include 'null' or 'undefined' in its type, therefore the '?.' operator can be replaced with the '.' operator.```

- **Solución:**

```
"angularCompilerOptions": {
    "extendedDiagnostics": {
      "checks": {
        "optionalChainNotNullable": "suppress"
      }
    }
  }
```

- [Documentación](https://angular.io/extended-diagnostics#configuration)
- [Solución encontrada en github](https://github.com/angular/angular/issues/46918)

## Redes Dominicode

- [Youtube 📺](https://www.youtube.com/c/DominiCode)
- [Website 🌎](https://dominicode.com)
- [Github 📂](https://github.com/domini-code)
- [Twitch 🎥](https://www.twitch.tv/dominicode_live)
