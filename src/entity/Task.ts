import { randomUUID } from "crypto";

export class Task {
    private id: string;
    private text: string;
    private completed: boolean;
    private createAt: Date;
    private updateAd: Date;
    
    constructor(text: string) {
        this.id = randomUUID();       
        this.text = text;      
        this.completed = false;      
        this.createAt = new Date();      
        this.updateAd = new Date(); 
    }

    public getId() {
        return this.id;
    }
    public getText() {
        return this.text;
    }
    public getCompleted() {
        return this.completed;
    }
    public getCreateAt() {
        return this.createAt;
    }
    public getUpdateAd() {
        return this.updateAd;
    }



}