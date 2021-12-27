import { useSelector } from "react-redux";

function TodoList({ status, id, title, handleDelete, handleToggle }) {
  return (
    <div style={{ display: "flex", padding: "1rem", gap: "2rem" }}>
      <div>{title}</div>
      <div>{`${status}`}</div>
      <button onClick={() => handleToggle(id)}>Toggle</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}

export default function TodoItem({ handleDelete, handleToggle }) {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <>
      {todos.map((item) => (
        <TodoList
          key={item.id}
          {...item}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </>
  );
}
