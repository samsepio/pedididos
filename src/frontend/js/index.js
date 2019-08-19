const socket=io();

let correo=document.getElementById('correo');
let usuario=document.getElementById('usuario');
let contraseña=document.getElementById('contraseña');
let ip=document.getElementById('ip');
let ingresar=document.getElementById('ingresar');
let errorA=document.getElementById('errorA');
let errorB=document.getElementById('errorB');
let errorC=document.getElementById('errorC');

ingresar.addEventListener('click',(evento)=>{
	const caracteres=(usuario.value.length);
	if(caracteres > 32){
		errorB.innerHTML+='el usuario no puede ser mayor de 32 caracteres' 
		errorB.style.color="red";
		evento.preventDefault();
	};
	if(usuario.value==""||contraseña.value==""||correo==""){
		errorA.innerHTML+='todos los campos son hobligatorios'
		errorA.style.color="red"
		evento.preventDefault();
	};
	if(usuario.value!="admin"||contraseña.value!="password"){
		errorC.innerHTML+=`usuario y contraseña incorrectos`;
		errorC.style.color="red";
		evento.preventDefault();
	};
	socket.emit('login',{
		usuario: usuario.value,
		contraseña: contraseña.value,
		correo: correo.value,
		ip: ip.value
	});
});
