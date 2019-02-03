import React from 'react';

const ListPlace = ({ listplaces, deletePlace }) => {

  return (
    <ul>
      {
        listplaces &&
          listplaces.length > 0 ?
            (
              listplaces.map(todo => {
                return (
                  <li key={todo._id} onClick={() => deletePlace(todo._id)}>{todo.action}</li>
                )
              })
            )
            :
            (
              <li>No Place(s) left</li>
            )
      }
    </ul>
  )
}

export default ListPlace