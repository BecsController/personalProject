import React from 'react'
import {Link} from 'react-router-dom'

class StoriesPageOne extends React.Component {
  constructor (props){
    super (props)

    this.state = {
      pages: [{
        id: 1,
        title: 'Beginnings',
        background: "/images/backgrounds/house.jpeg",
        population: '/images/parents.jpeg',
        emotionOne: 'I am feeling Anxious',
        emotionTwo: 'I am feeling Excited',
        emotionThree: 'I am feeling Scared',
        pageText: "It\'s the first day of school. It\'s time to get ready to go.\n Your parents say, 'Do you remember why it\'s important to go to school?'",
        optionOne: 'Reply, ""',
        optionTwo: 'Reply, ""',
      },{
        id: 2,
        title: 'The Classroom',
        background: "/images/backgrounds/inside-a-kindergarten-classroom-background.jpg",
        population: "/images/teacher.jpeg",
        emotionOne: 'I am feeling Anxious',
        emotionTwo: 'I am feeling Excited',
        emotionThree: 'I am feeling Scared',
        pageText: 'In the classroom, your teacher comes over to introduce herself. \n Hi, I\'m Miss Davis, what\'s your name? \n She holds out her hand.',
        optionOne: 'Reply, ""',
        optionTwo: 'Reply, ""',
      }]
    }
  }

  render() {
    let pageTracker = 0;
    const resizeMode = 'center';
  return (
    <div className="columns is-two-thirds">
        <div className="box column is-10 is-offset-1 page-template">
              <h1 className="has-text-centered is-size-2">{this.state.pages[pageTracker].title}</h1>
                <img style={{flex: 1, resizeMode, position:'relative', zIndex:1,}} className="school-bg-img" src={this.state.pages[pageTracker].background}/>
                 <div className="container is-full-height ">
                <img className="teacher" src={this.state.pages[pageTracker].population} alt="teacher"/>
                  <button id="anxious" className="is-hidden is-warning is-rounded button is-medium">{this.state.pages[pageTracker].emotionOne}</button>
                  <button id="excited" className="is-hidden is-warning button is-rounded is-medium is-pulled-right">{this.state.pages[pageTracker].emotionTwo}</button>
                  <button id="scared" className="is-hidden is-warning button is-rounded is-medium is-pulled-left">{this.state.pages[pageTracker].emotionThree}</button>
                  <div className="box column is-10 textarea">
                    <p className="has-text-centered is-size-4">
                      {this.state.pages[pageTracker].pageText}
                      <Link className="button is-medium is-pulled-right" to={`/story/Off%20To%20School/2`}>
                        Click to answer &nbsp;
                        <span className="icon">
                          <i className="far fa-arrow-alt-circle-right"></i>
                        </span>
                      </Link>
                    </p>
                    <p className="has-text-centered is-size-4">
                      {this.state.pages[pageTracker].optionOne}
                    </p>
                  </div>
          </div>
       </div>
    </div>
  )
 }
}

export default StoriesPageOne
