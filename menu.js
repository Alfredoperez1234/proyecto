fetch(menu.json)

//que hace esta linea? esta linea inicia la carga del archivo menu.json,
 //fetch es una funcion de javascript que facilita la realizacion de solicitudesde red como obtener datos de un archivo o un endpointde API.
//como funciona? fetch devuelve una promesa que, cuando se resuelve, te da acceso a la respuesta de la solicitud. Esta respuesta no es directamente los datos en formato JSON, si mo un objeto de respuesta que incluye varios detalles sobre la respuesta misma.

.then(response => response.json())
//Que hace? Esta linea toma el objeto de respuesta obtenidos del fetch y el utiliza el metodo .json() 
//para convertir el cuerpo de la respuesta en un objeto javascript (esto asume el cuerpo de la respuesta esta en formato JSON).
//Como funciona? el metodo .json() tambien devuelve una promesa, la cual se resuelve con el contenido del cuerpo en formato JSON.

.then(data =>{
    const menuContainer = document.getElementById('menu-container');
    //Que hace? aqui se presenta los datos JSON ya convertidos. Se obtienen una referencia 
    //el contenedor del menu en el HTML mediante getElementByid ('menu-container'), y luego se itera sobre los elementos (categorias) del menu.
    data.items. forEach(category => {
        const categoryTitle = document.createElement('h2');
        //Que hace?? Aqui se crea un elemento h2 y se asigna el nombre de la categoria como su contenido de texto, y luego se añade este titulo al contenido menu.
        categoryTitle.textContent = category.category;
        menuContainer.appendChild(categoryTitle);

        const table = document.createElement('table')
        //Que hace aqui se crea un elemento table para cada categoria. Ademas, se prepara el
        //encabeazdo (tablehead) con las columnas pertinentes,tableBody se inicializa vacio y se llenacon los elementos de la categoria.
        const tablehead = `<tr><th>Foto</
        th><th>Descripcion</th><th>Precio</th></tr>`;
        let tableBody = '';
        //Como funciona? para cada categoria en los datos, se realiza varios pasos:
        //Crear un titulo para la categoria: se crea un elemento <h2> para el titulo de la categoria, se 
        //establece su contenido de texto al nombre de la cotegoria(category.category), y luego se agrega al contenido del menu.
        //Crear una tabla por cada categoria. Primero se define el encabezado 
        //de la tabla (<th>foto</th><th>Descripcion</th><th>Precio</th>). 

        category.items.forEach(item=>{
            tableBody += <tr>
                <td><img src= "${item.image}" alt="{item.name}"></img></td>
                <><td>${item.name} - ${item.description} </td><td>${item.price}</td></>
            </tr>
        });
        //Que hace hace? para cada item dentro de category.items, se concatena
        //una nueva fila(<tr>) a tablebody. Esta fila contiene una celda para la imagen del elemento (usando el atributo src para URL de la imagen  y "alt"
        //par el texto alternativo), tra celda para el nombre y la descrpicion del elemento, y una tercera celda para el precio del elemento.
        table.innerHTML = tableHead + tableBody;
        //Que hace? una vez completadas todoas las filas de la tabla para los elementos de un categoria
        //, se combina el encabezado de la tabla (tableHead) con el cuerpo de la tabla (tableBody) y se establece
        //como el contenido HTML de la tabla. Finalmente, esta tabla se añade al contenedor del menu en la pagina web.
    });
});
//Poblar la tabla con los elementos: Para cada item dentro de una categoria, se crea una fila(<tr></tr>) con tres celdas (<td></td>): una parte la imagen
//(con un elemento <img>), otra parte el nombre y descrpicion del item, y una ultima para el precio. Esto se hace concatenado la nueva fila a una varible tableBody.
//Finalizar5 y mostrar la tabla: Una vez que todas las filas han sido agregadas a tableBody, se establece el elemento.
