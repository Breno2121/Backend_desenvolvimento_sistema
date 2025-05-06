import fastify from "fastify";
import { taskController } from "./controller/TaskController";

const app = fastify();

app.register(taskController);

//.then espera finalizar
const port = 3333;
app.listen({ port: port }).then(() => {
    console.log(`Backend rodando liso na ${port}!!`)
})
