import { TaskGoals } from  './task-goals';

export interface Child {
    id: number;
    name: string;
    age: number;
    parents: string;
    severity: string;
    responsible_pro: string;
    task_goals: TaskGoals[];
}
