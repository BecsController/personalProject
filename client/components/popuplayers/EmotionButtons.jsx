import React from 'react'

export default function EmotionButtons ({page, tracker}) {

return (
    <div>
      <button id="anxious" className="is-warning is-rounded button is-medium">
        {page[tracker].emotionOne}
      </button>
      <button id="excited" className="is-warning button is-rounded is-medium is-pulled-right">
        {page[tracker].emotionTwo}
      </button>
      <button id="scared" className="is-warning button is-rounded is-medium is-pulled-left">
        {page[tracker].emotionThree}
      </button>
    </div>
  )
}
