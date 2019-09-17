import React from 'react';

const List = ({ task }) => {
  return (
    <li>
      <p className="list_id"><span>ID :</span> {task.id}</p>
      <p>{task.title}（{task.year}）</p>
      <p className="list_cat"><span>Category :</span> {task.category}</p>
    </li>
  )

}

export default List;
