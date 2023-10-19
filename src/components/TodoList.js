// ./src/components/TodoList.js
import { HStack, Text, VStack } from "@chakra-ui/react";

export default function TodoList({ todos }) {
  return (
    <VStack
      w="100%"
      alignItems="stretch"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
    >
      {todos.map((todo) => (
        <HStack key={todo.id} bg="gray.700" borderRadius="lg" p="4">
          <Text color="white">{todo.item}</Text>
        </HStack>
      ))}
    </VStack>
  );
}