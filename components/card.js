import Image from "next/image"


function Card({ title, user, comments = [], id, setDragged }) {
  function handleDragStart(event) {
    console.log(event.target.closest('[data-id]').dataset.id)
    setDragged({
      data: {
        title,
        user,
        comments,
        id,
      },
      list: event.target.closest('[data-id]').dataset.id
    })
  }
  return (
    <div draggable onDragStart={handleDragStart} className="flex flex-col gap-4 p-2 text-gray-900 bg-white rounded-sm">
      <div className="flex justify-between">
        <p>
          {title}
        </p>
        <span>
          <Image src="/edit.svg" width={20} height={20} />

        </span>
      </div>
      <div className="flex justify-between">
        <span className="flex gap-1">
          <Image src="/comments.svg" width={20} height={20} />
          {comments.length > 0 ? comments.length : null}
        </span>
        <span>
          <Image src={user.avatar} width={20} height={20} />
        </span>
      </div>
    </div>
  )
}

export default Card
