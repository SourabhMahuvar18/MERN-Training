import { useState, useEffect, } from "react";
import type { Task } from "../types/task";

export const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>(() => { // lazy state initialization , here function only run on the first render 
        try {
            const stored = localStorage.getItem("tasks");
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (title: string) => {
        if (!title.trim()) return;
        const newTask: Task = {
            id: Date.now(),
            title,
            completed: false,
        };

        setTasks((prev) => [...prev, newTask]);
    };

    const toggleTask = (id: number) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };
    return { tasks, addTask, toggleTask, deleteTask };
};
