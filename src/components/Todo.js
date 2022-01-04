import { Box, Checkbox, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/action';

export const Todo = ({ todo }) => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);

    const handleChecked = () => dispatch(toggleTodo(todo.id));

    useEffect(() => {
        setChecked(todo.completed);
    }, [todo]);

    return (
       <Box mb={1} bgColor="lightcoral" p={2}>
           <Checkbox onChange={handleChecked} colorScheme="teal" isChecked={checked}>
               <Text as={todo.completed && "del"}>{todo.content}</Text>
           </Checkbox>
       </Box>
    )
}
