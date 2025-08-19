import { useState } from 'react'
import InputField from './assets/Component/inputfield'
import { DataTable } from './assets/Component/table'

interface User {
  name: string
  age: number
  email: string
}

function App() {
  const [inputVal, setInputVal] = useState("");
  function handlechange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputVal(e.target.value)
    console.log(inputVal)
  }
  return (
    <div className="p-4">
      <InputField onChange={handlechange} value={inputVal} />
       <DataTable data={[]} columns={[]} />
    </div>
  )
}

export default App
