import React, {Fragment, useState} from 'react';
import './App.css';

type FormElem = React.FormEvent<HTMLFormElement>
interface Itodo{
  text: string
  complete: boolean
}

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<Itodo[]>([])

  const addTodo = (text: string ) => {
    const newTodos: Itodo[] = [...todos, {text, complete: false}]
    setTodos(newTodos)
  }

  const handleSubmit = (e: FormElem):void => {
    e.preventDefault()
    addTodo(value)
    setValue('')

  }

  const completeTodo = (index: number):void => {
    const newTodos: Itodo[] = [...todos ]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  }
  const removeTodo = (index: number):void => {
    const newTodos: Itodo[] = [...todos ]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  return (
    <Fragment>
      <h1>ToDo Lits</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={e => setValue(e.target.value)} required />
        <button type='submit' >Add Todo</button>
      </form>
      <section>
        {
          todos.map((todo: Itodo, index: number) => (
            <Fragment key={index}>
              <div style={{textDecoration: todo.complete ? 'line-through': ''}}>{todo.text}</div>
              <button type='button' onClick={() => completeTodo(index)} > {todo.complete ? 'Complete' : 'Incomplete' }</button>
              <button type='button' onClick={() => removeTodo(index)} >Remove</button>
            </Fragment>

          ))
        }
      </section>
    </Fragment>
  );
}
  