import { TaskGoals } from  './task-goals';

export interface Child {
    id: number;
    name: string;
    age: number;
    severity: number;
    responsible_pro: string;
    task_goals: TaskGoals[];
}
