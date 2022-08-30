const TicketControl = require("../models/ticket-control")


const ticketControl = new TicketControl


const socketController = (socket) =>{
    console.log('Cliente conectado', socket.id)

    socket.on('disconnect', ()=>{
        console.log('cliente desconectado del server', socket.id)
    })

    socket.emit('ultimo-ticket', ticketControl.ultimo)


    socket.on('siguiente-ticket', (payload, callback)=>{

        const siguiente = ticketControl.siguente()

        callback(siguiente)

        // TODO: Notificar que hay nuevo ticket pendiente de asignar
    })

}


module.exports = {
    socketController
}