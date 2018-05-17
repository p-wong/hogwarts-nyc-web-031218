import React from 'react'
import Pig from './Pig'


export default class PigPen extends React.Component {

  hideHogV2 = (event) =>{
    debugger
    this.props.hideHog(event.target.hogIndex)
  }

  renderHogs = () => {
    return this.props.hogs.map((hog, index) => {
      return <Pig hideHog={this.hideHogV2} key={index} name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} medal={hog['highest medal achieved']} hogs={this.props.hogs} />
    })
  }

  render() {
    return (
      <div className="indexWrapper">
        { this.renderHogs() }
      </div>
    )
  }
}
