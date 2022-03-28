import { Ul } from "./style";

const TodoList = ({ List, handleTodo }) => {
  return (
    <Ul>
      {List.length !== 0 && <h4>Especialidades</h4>}
      {List.map((todo, index) => (
        <li key={index}>
          <button onClick={() => handleTodo(todo)}>X</button>
          {todo}
        </li>
      ))}
    </Ul>
  );
};

export default TodoList;
