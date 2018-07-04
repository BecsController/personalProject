import React from 'react'

export default function Options ({page, tracker}) {

return (
  <div>
    <button className="button has-text-centered is-rounded is-medium is-size-4 is-info is-pulled-left">
      {page[tracker].optionOne}
    </button>
    <button className="button has-text-centered is-rounded is-medium is-size-4 is-info is-pulled-right">
      {page[tracker].optionTwo}
    </button>
  </div>
  )
}
