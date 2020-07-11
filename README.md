# Lista de compras de Mamá

En esta práctica se utilizó sintaxis de ES6 con Javascript para representar de una mejor manera el entendimiento de las clases y las herencias.  
Tambien se usó SASS para una mayor flexibilidad a la hora de dar estilos a los elementos HTML. 



## Funcionamiento del programa

El programa consiste en una lista de supermercado de la cual se realizan copias para los diferentes miembros de la familia.  
En dichas copias se actualiza su contenido y se notifica a las mismas de cambios en la lista de compras original através del patron de diseño Observador

## Patrón de diseño Observador

El patrón de diseño Observador consta de una interfaz a la cual podriamos llamar _Observable_, la cual en este proyecto es representada en forma de clase por no poder hacer uso de interfaces ni clases abstractas.  
Dicha interfaz "Observable" debe tener un atributo _protected_ el cual contendrá un array con las clases que estarán _observando_ a esta misma. Además dispondrá de un metodo para añadir observadores y otro metodo para notificar a los observadores de las actualizaciones.

Esta clase será heredada por _ProductsGroup_ la cual estará observada por observadores que serán en este caso, las copias de cada integrante de la familia. Esta clase tendra tambien un array donde guardara los productos que se representarán en forma de lista y un metodo para agregar nuevos productos.

Se hará uso tambien de otra interfaz la cual llamaremos _Observer_ que tendra un metodo abstracto _newUpdates()_ el cual sera ejecutado cada vez que se le notifique a la clase que este observando, sobre algun cambio.  
En este proyecto la clase _Observer_ sera heredada por las copias que querran **Observar** a la instancia de _ProductsGroup_.
