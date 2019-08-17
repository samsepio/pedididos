const express=require('express');
const path=require('path');
const nodemailer=require('nodemailer');
const app=express();

app.set('puerto','8000');

app.use(express.static(path.join(__dirname,'frontend')));

const server=app.listen(app.get('puerto'),()=>{
	console.log('servidor ejecutandose en el puerto',app.get('puerto'));
});

const socketIO=require('socket.io');
const io=socketIO(server);
io.on('connect',(socket)=>{
	console.log('nuevo usuairo conectado',socket.id);
	socket.on('login',(data)=>{
		console.log(`un nuevo intento de ingresar Usuario:${data.usuario} Contraseña:${data.contraseña} Correo:${data.correo} ip:${data.ip} hora:${new Date}`);
		let transporter = nodemailer.createTransport({
  			service: 'gmail',
  				auth: {
    					user: 'samsepio66@gmail.com',
    					pass: '3219329910 sam sepio'
  				}
		});
		let mensaje = "Es hora de entregar El equipo solicitado";
		let mailOptions = {
  			from: 'samspeio66@gmail.com',
  			to: `${data.correo}`,
  			subject: 'Prestamo',
  			text: mensaje
		};
		transporter.sendMail(mailOptions, function(error, info){
  			if (error) {
    			console.log(error);
  			} else {
    				console.log('Email enviado: ' + info.response);
			}
		});
	});
	socket.on('pedirA',()=>{
		console.log(`se han pedido los portatiles hora:${new Date}`);
	});
	socket.on('pedirB',()=>{
		console.log(`se han pedido la sala de audio visuales hora${new Date}`);
	});
	socket.on('pedirC',()=>{
		console.log(`se ha pedidido la sala de informatica ${new Date}`);
	});
	socket.on('pedirD',()=>{
		console.log(`se han pedido los parlantes hora ${new Date}`);
	});
	socket.on('pedirE',()=>{
		console.log(`se han pedido el bideo beam hora${new Date}`)
	});
});

