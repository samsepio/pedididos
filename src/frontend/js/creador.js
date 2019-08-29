const socket=io();

let correo=document.getElementById('correo');
let mensaje=document.getElementById('mensaje');
let enviar=document.getElementById('enviar');

enviar.addEventListener('click',(evento)=>{
	if(correo.value==""||mensaje.value==""){
		alert('todos los campos son obligatorios');
		evento.preventDefault();
	};
	socket.emit('gmail',{
		correos: correo.value,
		mensajes: mensaje.value
	});
});
