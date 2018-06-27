import React from 'react'
import {Link} from 'react-router-dom'

class StoriesHome extends React.Component {
  constructor (props){
    super (props)
    this.state = {
      stories: [{
        id: 1,
        title: 'Off To School',
        user_id: 1,
        genre: 'School Stories',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnbuXaSFuiONDwcU9WZeRz8wshIQwTerzSIuFVGbErNaO2GnkBg',
        description: 'Learning to adjust to a new environment is difficult, this story explores the new experience of starting school and explores the feelings that develop.'
      },{
        id: 2,
        title: 'At The Mall',
        user_id: 2,
        genre: 'Out and About',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9KnNJ-ouwsQ80LguB5RYlWzna8GZlhKan_Xk8XNQ7hQNpkWU',
        description: 'Crowds and noise can be difficult to cope with, this story looks at potential scenarios that might develop when out and about at the mall.'
      },{
        id: 3,
        title: 'Hands to Ourselves',
        user_id: 1,
        genre: 'Behaviour',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QbCi8T9fgtEPUbC2WDUepT0XAWRy0AQCD-5dlXHNPt5ItyrU',
        description: "Learning about the right ways to behave is a challenging topic for any child.  This story looks at the reasons why others may not want to be touched, how we can tell others we don\'t like physical touch and what are gentle hands."
      }]
    }
  }

  render() {

  return (
    <div>
    <div className="columns is-two-thirds">
      <div className="column is-10 is-offset-1">
        <div className="box top-box">
          <h1 className="has-text-centered is-size-1 has-text-grey">
            Welcome to the Stories Page
          </h1>
        </div>
      </div>
    </div>

    <div className="columns is-two-thirds">
      <div className="column is-offset-1 is-2 is-2-widescreen">
        <div className="menu box">
          <p className="menu-label">
          Filter by genre
        </p>
        <ul className="menu-list">
          <li>
            <a className="is-active" data-action="filter" data-group href="/stories">All</a>
          </li>
          <li>
            <a data-action="filter" data-group="school" href="/stories/school">School stories</a>
          </li>
          <li>
            <a data-action="filter" data-group href="/stories/outandabout">Out and About</a>
          </li>
          <li>
            <a data-action="filter" data-group href="/stories/behaviour">Behaviour</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="column is-8">
      <div className="box">
        <div className="columns is-multiline" id="grid">
          {this.state.stories.map(story => {
            return (
          <div key={story.key} className="column is-3 is-3-widescreen is-flex">
            <div className="card">
              <Link to={`/story/${story.title}`}>
                <div className="card-title title is-4">
                  <h3 className="has-text-grey-dark">{story.title}</h3>
              </div>
              <div className="box card-image">
                <figure className="image is-1by1">
                    <img src={story.image} alt={story.title}/>
                  </figure>
              </div>
              <div className="card-body">
                <div className="box">
                  <p>
                    {story.description}
                  </p>
                </div>
              </div>
            </Link>
            </div>
          </div>
        )})}
        </div>
      </div>
      </div>
    </div>
  </div>
  )
 }
}

export default StoriesHome
