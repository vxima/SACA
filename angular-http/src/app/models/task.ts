export interface Task {
    id: number;
    title: string;
    description: string;
    dependencies: number[];
    dependencies_number: number;
}
