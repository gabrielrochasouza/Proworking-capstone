import { useState } from "react";

const Form = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const [contador, setContador] = useState(0);

  return (
    <div>
      <input
        maxLength={48}
        onChange={(e) => {
          setTodo(e.target.value);
          setContador(e.target.value.length);
        }}
        placeholder="Adicionar serviços"
      />
      <h4>{contador}/48</h4>
      <button
        onClick={() => {
          todo.length !== 0 && addTodo(todo);
        }}
      >
        Cadastrar serviço
      </button>
    </div>
  );
};

export default Form;
