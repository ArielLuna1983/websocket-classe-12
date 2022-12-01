const socket = io()

socket.on('products', async tabla => {
    let mapping = tabla.map(e => {
    return `<tr class="row text-center">
        <td class="col-4">${e.name}</td>
        <td class="col-4">$${e.price}</td>
        <td class="col-4"><image class="imagen" src="${e.image}"></td>
    </tr>`
    }).join('')
    document.getElementById('table').innerHTML = mapping
});

socket.on('conversation', async chat =>{
    console.log(("chat", await chat));
    let chatBox = chat.map(e => {
        return `<div>
        <div class="message"><span class="author">${author}</span>:${message}</div>
        </div>`
    }).join('')
    document.getElementById('conversacion').innerHTML = chatBox
})