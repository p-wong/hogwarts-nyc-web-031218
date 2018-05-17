import React from 'react';

class Pig extends React.Component {
  constructor() {
    super()

    this.state = {
      detailsClicked: false,
      hideContainer: false
    }
  }

  handleClick = () => {
    this.setState({
      detailsClicked: !this.state.detailsClicked
    })
  }

  downcaseName = (name) => {
    let newName = name.toLowerCase().split(' ').join('_')
    return newName
  }

  render() {
    if (!this.state.detailsClicked) {
      return (
        <div className="pigTile">
          <button hogIndex={this.props.key} onClick={this.props.hideHog}>Hide Hog</button><br />
          <img src={require(`../hog-imgs/${this.downcaseName(this.props.name)}.jpg`)} alt={this.props.name} />
          <h3>{this.props.name}</h3>
          <button onClick={this.handleClick}>Details</button>
        </div>
      )
    }
    else {
      return (
        <div className="pigTile maxPigTile">
          <img src={require(`../hog-imgs/${this.downcaseName(this.props.name)}.jpg`)} alt={this.props.name} />
          <h3>{this.props.name}</h3>
          <button onClick={this.handleClick}>Details</button>
          <p>Specialty: {this.props.specialty}</p>
          <p>{this.props.greased ? "Greased" : "Not Greased"}</p>
          <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.weight}</p>
          <p>Highest Medal Achieved: {this.props.medal}</p>
        </div>
      )
    }
  }
}

export default Pig
