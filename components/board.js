import List from "./list"
import Card from "./card"
import { useState } from 'react'
import { todoList, inProgressList, doneList } from "./data"

function Board() {
  const [dragged, setDragged] = useState(null)
  const [listOfLists, setListOfLists] = useState({
    todoList,
    inProgressList,
    doneList
  })
  function handleDrop(event) {
    const list = event.currentTarget.dataset.id
    const listOfListsClone = structuredClone(listOfLists)

    const newList = listOfListsClone[dragged.list].filter(item => item.id !== dragged.data.id)

    listOfListsClone[dragged.list] = newList
    listOfListsClone[list].push(dragged.data)


    setListOfLists(listOfListsClone)
  }
  return (
    <div className="flex flex-col flex-1 gap-4 p-4 ">
      <div>
        <h1 className="text-2xl font-bold">
          Development
        </h1>
      </div>
      <main className="flex flex-1 gap-6 ">
        <List title="TODO" handleDrop={handleDrop} id="todoList">
          {
            listOfLists.todoList.map(item => (
              <Card {...item} key={item.id} setDragged={setDragged} />
            ))
          }

        </List>
        <List title="In Progress" handleDrop={handleDrop} id="inProgressList">
          {
            listOfLists.inProgressList.map(item => (
              <Card {...item} key={item.id} setDragged={setDragged} />
            ))
          }

        </List>
        <List title="Done" handleDrop={handleDrop} id="doneList">
          {
            listOfLists.doneList.map(item => (
              <Card {...item} key={item.id} setDragged={setDragged} />
            ))
          }

        </List>

      </main>
    </div>
  )
}

export default Board
