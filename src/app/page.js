// ./src/app/page.js

"use client";

import { useState } from "react";
import { Heading, VStack } from "@chakra-ui/react";
import AddTodo from "@/components/AddTodo.js";
import TodoList from "@/components/TodoList.js";

export default function Home() {
  const [todos, setTodos] = useState([
    { id: "1", item: "Read some awesome articles on Prismic's blog" },
    { id: "2", item: "Watch One Piece" },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <VStack p={4} mt="28">
      <Heading size="2xl">Todos</Heading>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </VStack>
  );
}