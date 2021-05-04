export interface Task {
    id: number;
    title: string;
    description: string;
    difficulty: number;
    dependencies: number[];
    dependencies_number: number;
}
