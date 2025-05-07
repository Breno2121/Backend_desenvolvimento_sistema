import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { taskService } from "../service/TaskService";

export async function taskController(app: FastifyInstance) {
    app.post("/task", (request, reply) => {
        //PEGAR IMFORMACAO DO FRONT OU QUEM CHAMAR O ENDPOINT (TEXT)
        const body = request.body as { text: string };

        try {
            taskService.create(body.text);
            return reply.code(201).send();
        } catch (error: any) {
            return reply.code(409).send({ erro: error.message })
        }
    })

    app.get("/tasks", (_, reply) => {
        const list = taskService.getAll()
        return reply.code(200).send(list);
    })

    app.get("/tasks:id", (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        const task = taskService.getById(id);
        return reply.code(200).send(task);
    })
    app.patch("/tasks/:id/completed", (request, reply) => {
        //Captura informacao
        const { id } = request.params as { id: string };

        try {
            //repassa info recebida e receb informacao processado
            const task = taskService.updateCompleted(id);
            //Retorna uma response para quem chamou a rota
            return reply.code(200).send(task)
        } catch (error: any) {
            return reply.code(404).send({ error: error.message })
        }
    });

    app.patch("/tasks/:id/text", (request, reply) => {
        const { id } = request.params as { id: string };
        const { text } = request.body as { text: string };

        try {
            const task = taskService.updateText(id, text);
            return reply.code(200).send(task);
        } catch (error: any) {
            return reply.code(404).send({ error: error.message })
        }
    })

    app.delete("/tasks/:id", (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string }
        taskService.delete(id)
        return reply.code(200).send();
    })

}
