
import React from 'react'

export default function CategoryDetail({cat}) {

  return (
    <div key={cat.id}>{cat.name}</div>
  )
}
