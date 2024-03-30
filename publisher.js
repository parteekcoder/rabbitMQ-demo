const amqp = require("amqplib")

// amqp - advance message queue protocol


const msg = {number:19}

async function connect(){

    try {
        const connection = await amqp.connect("amqp://localhost:5672")
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("jobs");
        console.log(result);
        channel.sendToQueue("jobs",Buffer.from(JSON.stringify(msg)))
        console.log("sent successfully");
    } catch (error) {
        console.error(error);
    }
} 

connect()