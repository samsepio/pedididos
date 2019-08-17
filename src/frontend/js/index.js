const socket=io();

let correo=document.getElementById('correo');
let usuario=document.getElementById('usuario');
let contraseña=document.getElementById('contraseña');
let ip=document.getElementById('ip');
let ingresar=document.getElementById('ingresar');

ingresar.addEventListener('click',(evento)=>{
	const caracteres=(usuario.value.length);
	if(caracteres > 32){
		alert('el usuario no puede ser mayor de 32 caracteres');
		evento.preventDefault();
	};
	if(usuario.value==""||contraseña.value==""||correo==""){
		alert('todos los campos son hobligatorios');
		evento.preventDefault();
	};
	if(usuario.value!="admin"||contraseña.value!="password"){
		alert('el usuario y la contraseña son incorrectos');
		evento.preventDefault();
	};
	socket.emit('login',{
		usuario: usuario.value,
		contraseña: contraseña.value,
		correo: correo.value,
		ip: ip.value
	});
});
