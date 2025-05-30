import fastify from "fastify";
import { taskController } from "./controller/TaskController";
import cors from "@fastify/cors";
import { UserController } from "./controller/UserController";

const app = fastify();

    app.register(cors, {
        origin: true,
        methods: ["GET", "POST", "PATCH", "DELETE"]
    });

app.register(taskController);
app.register(UserController);

//.then espera finalizar
const port = 3333;
app.listen({ port: port }).then(() => {
    console.log(`Backend rodando liso na ${port}!!`)
})
