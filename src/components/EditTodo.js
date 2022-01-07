import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { editTodo } from "../redux/action";

export const EditTodo = () => {
  const dispath = useDispatch();
  const [value, setValue] = useState('');

  const editbuttonSubmit = (e) => {
      e.preventDefault();
      dispath(editTodo(value));
      setValue("");
  }

    const handleInput = e => {
        setValue(e.target.value);
        console.log(e.target.value);
    }

  return (
    <form onSubmit={editbuttonSubmit}
      style={{
        paddingTop: "15%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Input id="indexID" type="text"  width="15%" placeholder="Insert id" />
      <Input onChange={ handleInput } value={value} width="65%" placeholder="Edit here" />
      <Button width="10%" type="submit" colorScheme="blue">
        edit
      </Button>
    </form>
  );
};
