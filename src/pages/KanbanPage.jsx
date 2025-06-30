import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState, useEffect } from "react";

const defaultData = {
  todo: {
    title: "📝 To Do",
    tasks: [
      { id: "task-5", content: "Managing data with Redux" },
      { id: "task-6", content: "React and APIs" },
      { id: "task-7", content: "GIT" },
      { id: "task-8", content: "Application Deployment" },
    ],
  },
  inProgress: {
    title: "🚧 In Progress",
    tasks: [{ id: "task-4", content: "Creating forms in React" }],
  },
  done: {
    title: "✅ Done",
    tasks: [
      { id: "task-1", content: "Introduction to React" },
      {
        id: "task-2",
        content: "React component lifecycle and state management",
      },
      {
        id: "task-3",
        content: "Routing & UseContext in React",
      },
    ],
  },
};

const KanbanPage = () => {
  const [columns, setColumns] = useState(() => {
    const saved = localStorage.getItem("kanbanData");
    return saved ? JSON.parse(saved) : defaultData;
  });

  useEffect(() => {
    localStorage.setItem("kanbanData", JSON.stringify(columns));
  }, [columns]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];
    const sourceTasks = [...sourceCol.tasks];
    const destTasks = [...destCol.tasks];
    const [moved] = sourceTasks.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceTasks.splice(destination.index, 0, moved);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceCol,
          tasks: sourceTasks,
        },
      });
    } else {
      destTasks.splice(destination.index, 0, moved);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceCol,
          tasks: sourceTasks,
        },
        [destination.droppableId]: {
          ...destCol,
          tasks: destTasks,
        },
      });
    }
  };

  const handleReset = () => {
    localStorage.removeItem("kanbanData");
    window.location.reload();
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">📋 Kanban Board</h2>

      <button
        onClick={handleReset}
        className="mb-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        🔄 Reset Board
      </button>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-6 overflow-x-auto pb-2">
          {Object.entries(columns).map(([colId, col]) => (
            <Droppable droppableId={colId} key={colId}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-gradient-to-b from-slate-200 to-slate-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 w-72 flex-shrink-0 shadow-md"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                    {col.title}
                  </h3>
                  {col.tasks.map((task, index) => (
                    <Draggable draggableId={task.id} index={index} key={task.id}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 mb-3 rounded-lg shadow hover:shadow-lg transition-all"
                        >
                          {task.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanPage;
