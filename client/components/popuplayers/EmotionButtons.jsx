import React from 'react'

export default function EmotionButtons ({page, tracker}) {

  return (
    <div>
      <button id="anxious" className="is-warning is-fullwidth button is-medium">
        {page[tracker].emotionOne}
      </button>
      <hr />
      <button id="excited" className="is-warning is-fullwidth button is-medium">
        {page[tracker].emotionTwo}
      </button>
      <hr />
      <button id="scared" className="is-warning is-fullwidth button is-medium">
        {page[tracker].emotionThree}
      </button>
    </div>
  )
}
