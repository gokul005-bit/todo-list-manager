function TaskCard({ task }) {
  
  return (
    <div className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition w-full sm:w-[48%] md:w-[31%]">
      <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
      <p className="text-sm text-gray-500 mt-1">{task.description}</p>
      <div className="flex justify-between mt-4 text-sm">
        <span className={`font-medium ${task.status === "done" ? "text-green-600" : "text-yellow-600"}`}>
          {task.status}
        </span>
        <span className="text-gray-400">{task.priority}</span>
      </div>
    </div>
  );
}

export default TaskCard;
