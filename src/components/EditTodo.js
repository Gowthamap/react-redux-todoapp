import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { editTodo } from "../redux/action";
import { Select } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const EditTodo = () => {
  const dispath = useDispatch();
  const [content, setContent] = useState("");
  const [id, setID] = useState("");


  const globalState  = useSelector(state => state)
  const currentTodos = globalState.todos.todos

  const editbuttonSubmit = (e) => {
    e.preventDefault();
    let editedTodo = [...currentTodos];
    editedTodo = currentTodos.map((currentTodo) => {
          if (currentTodo.id.toString() === id ) {
            currentTodo.content = content;
          }
          return currentTodo;
      }) 
      dispath(editTodo(editedTodo));
      setID("");
      setContent("");
  };

  const handleInput = (e) => {
    setContent(e.target.value);
  };
  
  const handleDropdownSelect = (e) => {
    setID(e.target.value);
  };

  return (
    <form
      onSubmit={editbuttonSubmit}
      style={{
        paddingTop: "15%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >

      
    
      <Select placeholder="Enter ID" width="150px" onChange={handleDropdownSelect}>
        {currentTodos && 
          Array.isArray(currentTodos) && 
          currentTodos.length && 
          currentTodos.map((todo) => <option value={todo.id} key={todo.id}>{todo.id}</option>) ||
          null
        }
      </Select>
      <Input
        onChange={handleInput}
        value={content}
        width="65%"
        placeholder="Edit here"
      />
      <Button width="10%" disabled={!content} type="submit" colorScheme="blue">
        edit
      </Button>
    </form>
  );
};
