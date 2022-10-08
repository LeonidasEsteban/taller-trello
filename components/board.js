import List from "./list"
import Card from "./card"
import { useState } from 'react'
import { todoList, inProgressList, doneList } from "./data"

function Board() {
  const [dragged, setDragged] = useState(null)
  function handleDrop(event) {
    const list = event.currentTarget.dataset.id
    console.log(dragged)
  }
  return (
    <div className="flex flex-col flex-1 gap-4 p-4 ">
      <div>
        <h1 className="text-2xl font-bold">
          Development
        </h1>
      </div>
      <main className="flex flex-1 gap-6 ">
        <List title="TODO" handleDrop={handleDrop} id="todo">
          {
            todoList.map(item => (
              <Card {...item} key={item.id} setDragged={setDragged} />
            ))
          }

        </List>
        <List title="In Progress" handleDrop={handleDrop} id="in-progress">
          {
            inProgressList.map(item => (
              <Card {...item} key={item.id} setDragged={setDragged} />
            ))
          }

        </List>
        <List title="Done" handleDrop={handleDrop} id="done">
          {
            doneList.map(item => (
              <Card {...item} key={item.id} setDragged={setDragged} />
            ))
          }

        </List>

      </main>
    </div>
  )
}

export default Board
