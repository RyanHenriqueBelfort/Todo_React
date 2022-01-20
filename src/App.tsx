import { useState } from 'react'
import * as C from './App.styles'
import {Item} from './types/item'

import {List} from './components/listitem/'
import {AddArea} from './components/AddArea'

const App = ()=>{
  const [list, SetList] = useState<Item[]>([
    {id: 1, name: 'comprar pão na padaria', done: true},
    {id: 2, name: 'comprar bolo na padaria', done: false}

  ])

  const handleAddTask = (taskName: string) =>{
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    SetList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de Tarefas
        </C.Header>
        <AddArea onEnter={handleAddTask}></AddArea>

        {list.map((item,index)=>(
            <List key={index} item={item}></List>
          ))}
      </C.Area>
    </C.Container>
  )
}

export default App