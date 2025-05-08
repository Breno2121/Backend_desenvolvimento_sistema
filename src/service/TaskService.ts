import { Task } from "../entity/Task";

class TaskService {

    private taskList: Task[] = [];

    public create(text: string): void {
        const textAlreadyExist = this.taskList.find(task => task.getText() === text);
        if (textAlreadyExist) {
            throw new Error("Já existe uma tarefa com esse texto.")
        }

        const newTask = new Task(text);
        this.taskList.push(newTask);
    }

    public getAll(): Task[] {
        return this.taskList;
    }

    public getById(id: string): Task | null {
        const task = this.taskList.find(task => task.getId() === id);
        return task ? task : null;
    }

    public updateCompleted(id: string){
        const task = this.getById(id);
        if(task === null){
            throw new Error("Tarefa não foi encontrada.")
        }

        task.setCompleted(); 
        return task;
    }

    public updateText(id: string, text: string){
        const task = this.getById(id);
        if(task === null){
            throw new Error("Tarefa não foi encontrada.")
        }

        task.setText(text);
        return task;
    }

    public deleteTask(id: string) {
        this.taskList = this.taskList.filter(task => task.getId() !== id);
    }

}

export const taskService = new TaskService();