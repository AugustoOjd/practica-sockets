const TicketControl = require("../models/ticket-control")


const ticketControl = new TicketControl


const socketController = (socket) =>{
    console.log('Cliente conectado', socket.id)

    socket.on('disconnect', ()=>{
        console.log('cliente desconectado del server', socket.id)
    })

    // Eventos cuando un cliente se conecta
    socket.emit('ultimo-ticket', ticketControl.ultimo)
    socket.emit('estado-actual', ticketControl.ultimos4)
    socket.emit('tickets-pendientes', ticketControl.tickets.length )


    socket.on('siguiente-ticket', (payload, callback)=>{

        const siguiente = ticketControl.siguente()

        callback(siguiente)

        // TODO: Notificar que hay nuevo ticket pendiente de asignar
    })

    socket.on('atender-ticket', ({escritorio}, callback)=>{


        socket.broadcast.emit('estado-actual', ticketControl.ultimos4)
        socket.emit('tickets-pendientes', ticketControl.tickets.length )
        socket.broadcast.emit('tickets-pendientes', ticketControl.tickets.length )

        if(!escritorio){
            return callback({
                ok: false,
                msg: 'El escritorio es obligatorio'
            })
        }

        const ticket = ticketControl.atenderTicket( escritorio )

        if(!ticket){
            callback({
                ok: false,
                msg: 'Ya no hay tickets pendientes'
            })
        }else{
            callback({
                ok: true,
                ticket
            })
        }

    })

}


module.exports = {
    socketController
}