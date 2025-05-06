import { Task } from "../entity/Task";

class TaskService {

    private taskList: Task[] = []

    public create(text: string): void {
        const textAlreadyExist = this.taskList.find(task => task.getText() === text);
        if (textAlreadyExist) {
            throw new Error("JA EXISTE UMA TAREFA COM ESTE TEXTO.")
        }

        const newTask = new Task(text);
        this.taskList.push(newTask);
    }

    getAll(): Task[] {
        return this.taskList;
    }

    public getById(id: string): Task | null {
        const task = this.taskList.find(task => task.getId() === id);
        return task ? task : null;
    }
    
    public updateCompleted(id: string, completed: boolean) {
        const task = this.getById(id);
        if (task === null) {
            throw new Error ("Tarefa nao encontrada..")
        }

        task.setCompleted(completed);
        return task;
    }

    public updateText(id: string, text: string) {
        const task = this.getById(id);
        if (task === null) {
            throw new Error ("Tarefa nao econtrada..")
        }

        task.setText(text);
        return task;
    }

}
export const taskService = new TaskService();