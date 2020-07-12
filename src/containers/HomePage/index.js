import React, {Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push, goBack } from 'connected-react-router'
import { getPeople } from '../../actions/people'


class HomePage extends Component {

  componentDidMount = () => {
      this.props.getPeople()
  }

  render() {
    const peopleList = this.props.peopleList

    return (
      <div>
        <h1>People & Cars</h1>
        {peopleList.map((person, key) => {
          return <p key={key}>{person.firstName}</p>
        })}
      </div>
    )
  }
}
  
const mapStateToProps = ({ people }) => ({
  peopleList: people.peopleList
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      push,
      goBack,
      getPeople
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
