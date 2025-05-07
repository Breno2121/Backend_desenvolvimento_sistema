import { Task } from "../entity/Task";
import { prisma } from "../prisma/client";

export class TaskRepository {
    async save(task: Task){
        await prisma.task.create({
            data: {
                id: task.getId(),
                text: task.getText(),
                completed: task.getCompleted(),
                createdAt: task.getCreateAt(),
                updateAt: task.getUpdateAd()
            }
        })
        
    }
        async findAll() {
            return await prisma.task.findMany();
        }
}