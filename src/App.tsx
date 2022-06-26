import * as C from "./App.styles";
import { useState } from "react";
import { Item } from "./types/item";
import ListItem from "./components/ListItem";
import { AddContent } from "./components/AddContent";

function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Aprimorar o typescript", done: false },
    { id: 2, name: "Criar mais conteúdos para portfólio", done: false },
    { id: 3, name: "Subir aplicações no github", done: false },
    { id: 4, name: "Deploy na vercel", done: false },
  ]);

  function handleAddTask(taskName: string) {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  }

  return (
    <C.Container>
      <C.Content>
        <C.Header>Lista de Tarefas</C.Header>

        <AddContent onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Content>
    </C.Container>
  );
}

export default App;
