## running rabbitMQ on docker

```
docker run --name rabbitmq -p 5672:5672 rabbitmq
```

## Application 

`Publisher`: Produces messages to rabbitmq server
`Consumer`: listen the channel and consume messages


## Architecture
- Both `Publisher` and `consumer` establish full duplex TCP connection with the server
- Publisher publishes a message to the queue at the rabbitmq server(or borker) 
- Broker pushes messages to the consumer
- After the consumer acknowledge the message received the broker dequeue(pop) the message from the queue
 