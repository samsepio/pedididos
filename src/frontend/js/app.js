const socket=io();

let pedirA=document.getElementById('pedirA');
let pedirB=document.getElementById('pedirB');
let pedirC=document.getElementById('pedirC');
let pedirD=document.getElementById('pedirD');
let pedirE=document.getElementById('pedirE');
let portatiles=document.getElementById('portatiles');
let parlantes=document.getElementById('parlantes');
let mensajeA=document.getElementById('mensajeA');
let mensajeB=document.getElementById('mensajeB');

pedirA.addEventListener('click',(evento)=>{
	if(portatiles.value > 4){
		alert('el numero de portatiles a pedir no puede ser mayor a 4');
		return false();
	};
	alert('recuerda que tienes que entregar el equipo solicitado en dos horas');
	pedirA.style.color="red";
	portatiles.style.background="red";
	mensajeA.innerHTML+=`los portatieles ya an sido pedididos`
	mensajeA.style.color="red";
	socket.emit('pedirA');
});
pedirB.addEventListener('click',(evento)=>{
	alert('recuerda que tienes que entregar el equipo solicitado en dos horas');
	pedirB.style.color="red";
	socket.emit('pedirB');
});
pedirC.addEventListener('click',(evento)=>{
	alert('recuerda que tienes que entregar el equipo solocitado en dos horas');
	pedirC.style.color="red";
	socket.emit('pedirC');
});
pedirD.addEventListener('click',(evento)=>{
	if(parlantes.value > 4){
		alert('no pueds pedir mas de 4 parlantes');
		return false();
	};
	alert('recuerda que tienes que entregar el equipo solicitado en dos horas');
	pedirD.style.color="red";
	parlantes.style.background="red";
	mensajeB.innerHTML+=`los parlantes ya an sido pedidos`
	mensajeB.style.color="red";
	socket.emit('pedirD');
});
pedirE.addEventListener('click',(evento)=>{
	alert('recuersa que tienes que entregar el equipo solicitado en dos horas');
	pedirE.style.color="red";
	socket.emit('pedirE');
});

