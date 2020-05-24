import React, {Fragment, useState} from 'react';
import './App.css';
type FormElem = React.FormEvent<HTMLFormElement>
export default function App(): JSX.Element {
  const [value, setValue] = useState<string>('')
  const handleSubmit = (e: FormElem):void => {
    e.preventDefault()
    setValue('')
  }

  return (
    <Fragment>
      <h1>ToDo Lits</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={e => setValue(e.target.value)} required />
        <button type='submit' >Add Todo</button>
      </form>
    </Fragment>
  );
}
  