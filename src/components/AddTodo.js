// ./src/components/AddTodo.js
import { useRef } from "react";
import { Button, HStack, Input } from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ addTodo }) {
  const todoRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoRef.current.value.trim());

    const todo = {
      id: uuidv4(),
      item: todoRef.current.value,
    };

    addTodo(todo);
    todoRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack m="8">
        <Input
          variant="filled"
          border="gray.600"
          placeholder="Add todo item"
          ref={todoRef}
        />
        <Button type="submit" colorScheme="green" px="8">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}