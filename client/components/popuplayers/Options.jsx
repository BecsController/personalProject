import React from 'react'

export default function Options ({page, tracker}) {

return (
  <div>
    <button className="has-text-centered is-rounded is-medium is-size-4">
      {page[tracker].optionOne}
    </button>
    <button className="has-text-centered is-rounded is-medium is-size-4">
      {page[tracker].optionTwo}
    </button>
  </div>
  )
}
