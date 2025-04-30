import fastify from "fastify";
import { taskController } from "./controller/TaskController";

const app = fastify();

app.register(taskController);

//.then espera finalizar
app.listen({ port: 3333 }).then(() => {
    console.log("Backend rodando liso na 3333!!")
})
