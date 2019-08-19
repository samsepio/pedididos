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
let numero=document.getElementById('numero');

pedirA.addEventListener('click',(evento)=>{
	if(portatiles.value==""){
		mensajeA.innerHTML+=`no puede dejar este campo en blanco es obligatorio`
		mensajeA.style.color="red";
		return false();
	};
	if(portatiles.value > 4){
		mensajeA.innerHTML+=` no puede pedir mas de 4 portatieles`
		mensajeA.style.color="red"
		return false();
	};
	if(portatiles.value=="0"){
		mensajeA.innerHTML+=`el numero de portatiles a pedir no puede ser cero`
		mensajeA.style.color="red";
		return false();
	};
	alert('recuerda que tienes que entregar el equipo solicitado en dos horas');
	pedirA.style.color="red";
	portatiles.style.background="red";
	socket.emit('pedirA',{
		mensaje: mensajeA.value
	});
	socket.on('mensaje',(data)=>{
		mensajeA.innerHTML+=`<p>numero de portatiles pedidos ${portatiles.value}</p>`
		mensajeA.style.color="blue"
		if(portatiles >= 32){
			mensajeA.innerHTML+=`todos los portatiles se han pedido`
			mensajeA.setyle.color="red"
		};
	});
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
	if(parlantes.value==""){
		mensajeB.innerHTML+=`no puede dejar este campo en blanco es hobligatorio`
		mensajeB.style.color="red";
		return false();
	};
	if(parlantes.value > 4){
		mensajeB.innerHTML+=`el numero de parlantes neo puede ser mayor a 4`
		mensajeB.styele.color="red";
		return false();
	};
	if(parlantes.value=="0"){
		mensajeB.innerHTML+=`el numero de parlaneted neo puede ser cero`
		mensajeB.style.color="red";
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

