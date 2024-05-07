fetch(menu.json)
.then(response => response.json())
.then(data =>{
    const menuContainer = document.getElementById('menu-container');
    data.items. forEach(category => {
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.category;
        menuContainer.appendChild(categoryTitle);

        const table = document.createElement('table')
        const tablehead = `<tr><th>Foto</
        th><th>Descripcion</th><th>Precio</th></tr>`;
        let tableBody = '';


        category.items.forEach(item=>{
            tableBody += <tr>
                <td><img src= "${item.image}" alt="{item.name}"></img></td>
                <><td>${item.name} - ${item.description} </td>
                <td>${item.price}</td></>
                <td><input type="checkbox" data-price="${item.price.replace
                    ('&','')}" onchage="updateTotal()"></input></td>
            </tr>;
        });
        table.innerHTML = tableContent;
        menuContainer.appendChild(table);
    });
});
function updateTotal(){
    const checkboxes = document.querySelectorAll('input[type = "checkbox"](data-price');
    let currentTotal = 0;
    checkboxes.forEach(chexkbox =>{
        if(chexkbox.checked){
            currentTotal += parseFloat(checkbox.getAttribute('data-price'));
        }
    });
    document.getElementById('total').textContent = currentTotal.toFixed(2);

}
