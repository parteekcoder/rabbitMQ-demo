const amqp = require("amqplib")

// they suport 3,4 protocol
// amqp - advance message queue protocol
// stomp protocol
// HTTP protocol

async function connect(){

    try {
        const connection = await amqp.connect("amqp://localhost:5672")
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("jobs");
        channel.consume("jobs",message => {
            console.log(message);
            channel.ack(message); //acknowledg and dequeing 
        })
        console.log("Waiting for messages...");
    } catch (error) {
        console.error(error);
    }
} 

connect()