import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onToggleStatus }) {
  return (
    <div className="flex flex-wrap gap-4">
      {tasks.map(task => (
        <TaskCard
          key={task._id}
          task={task}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  );
}
