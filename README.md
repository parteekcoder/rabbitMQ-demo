### RabbitMQ-demo

This project is developed to understand the working of rabbitMQ

## Running project locally

- run rabbitMQ broker locally

```
docker run --name rabbitmq -p 5672:5672 rabbitmq
```
- Clone this repo

- Install the packages using `npm install`

- Run the Publisher

```
npm run publisher
```

- Run the Consumer (in another terminal)

```
npm run consumer
```

## Application 

`Publisher`: Produces messages to rabbitmq server

`Consumer`: listen the channel and consume messages


## Architecture
- Both `Publisher` and `consumer` establish full duplex TCP connection with the server
- Publisher publishes a message to the queue at the rabbitmq server(or borker) 
- Broker pushes messages to the consumer
- After the consumer acknowledge the message received the broker dequeue(pop) the message from the queue
 