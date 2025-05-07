import { Task } from "../entity/Task";
import { TaskRepository } from "../repository/TaskRepository";

class TaskService {

    private taskList: Task[] = []
    private taskRepository = new TaskRepository()

    public create(text: string): void {
        // const textAlreadyExist = this.taskList.find(task => task.getText() === text);
        // if (textAlreadyExist) {
        //     throw new Error("JA EXISTE UMA TAREFA COM ESTE TEXTO.")
        // }

        const newTask = new Task(text);
        // this.taskRepository.save(newTask);
    }

    public getAll() {
        const task = await this.taskRepository.findAll();
        console.log(task)
        return task;
    }

    public getById(id: string): Task | null {
        const task = this.taskList.find(task => task.getId() === id);
        return task ? task : null;
    }

    public updateCompleted(id: string) {
        const task = this.getById(id);
        if (task === null) {
            throw new Error("Tarefa nao encontrada..")
        }

        task.setCompleted();
        return task;
    }

    public updateText(id: string, text: string) {
        const task = this.getById(id);
        if (task === null) {
            throw new Error("Tarefa nao econtrada..")
        }
        task.setText(text);
        return task;
    }
    public delete(id: string) {
        const task = this.getById(id);
        if (task === null) {
            throw new Error("Tarafa nao foi encontrada.")
        }
        const taskFilter = this.taskList.filter(task => task.getId() !== id)
        this.taskList = taskFilter
    }

}

export const taskService = new TaskService();