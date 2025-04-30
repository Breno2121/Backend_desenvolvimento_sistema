import { Task } from "../entity/Task";

class TaskService {

    private taskList: Task[] = []
    public create(text: string): void {
        const textAlreadyExist = this.taskList.filter(task => task.getText() === text);
        if (textAlreadyExist) {
            throw new Error("JA EXISTE UMA TAREFA COM ESTE TEXTO.")
        }

        const newTask = new Task(text);
        this.taskList.push(newTask);
    }

    getAll(): Task[] {
        return this.taskList;
    }
}
export const taskService = new TaskService();