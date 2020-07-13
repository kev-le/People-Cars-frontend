import React, {Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push, goBack } from 'connected-react-router'
import { getPeople, addPerson, deletePerson, editPerson } from '../../actions/people'
import { addCar, deleteCar, editCar } from '../../actions/car'
import { Button, Card, Popconfirm, message, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import PersonModal from '../../components/personModal'
import CarModal from '../../components/carModal'


class HomePage extends Component {

  state = { 
    personCreateVisible: false,
    personEditVisible: false,
    person : {},
    carCreateVisible: false,
    carEditVisible: false,
    car : {}
  }

  componentDidMount = () => {
    this.props.getPeople()
  }

  showCreatePersonModal = () => {
    this.setState({ personCreateVisible: true });
  };

  showEditPersonModal = () => {
    this.setState({ personEditVisible: true });
  };

  showCreateCarModal = () => {
    this.setState({ carCreateVisible: true });
  };

  showEditCarModal = () => {
    this.setState({ carEditVisible: true });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      personCreateVisible: false,
      personEditVisible: false,
      carEditVisible: false,
      carCreateVisible: false });
  };

  onFinishCreate = values => {
    console.log('Success:', values);
    this.handleCancel()

    this.props.addPerson(values)
  };

  onFinishEdit = values => {
    console.log('Success:', values);
    this.handleCancel()

    this.props.editPerson(values)
  };

  onFinishCreateCar = values => {
    console.log('Success:', values);
    this.handleCancel()

    this.props.addCar(values)
  };

  onFinishEditCar = values => {
    console.log('Success:', values);
    this.handleCancel()

    this.props.editCar(values)
  };

  handlePersonDelete = personId => {
    this.props.deletePerson(personId)
    message.success('Successfully Deleted')
  }

  handlePersonEdit = person => {
    this.setState({ person : person})
    this.showEditPersonModal()
  }

  handleCarDelete = carId => {
    this.props.deleteCar(carId)
    message.success('Successfully Deleted')
  }

  handleCarEdit = car => {
    this.setState({ car : car})
    this.showEditCarModal()
  }

  render() {
    const peopleList = this.props.peopleList

    return (
      <div>
        <h1>People & Cars</h1>
        <Button className="addButton"
                type="primary" 
                icon={<PlusOutlined />}
                onClick={this.showCreatePersonModal}
        > Add Person </Button>

        <Button type="primary"
                icon={<PlusOutlined />}
                onClick={this.showCreateCarModal}
        > Add Car </Button>


        {peopleList.map((person, key) => {
          return (
          <Card key={key}
                className="personCard"
                title={person.firstName + " " + person.lastName}
                extra={<div>
                        <Button onClick={() => this.handlePersonEdit(person)}>Edit</Button>
                        <Popconfirm
                          title="Are you sure you want to delete this person?"
                          onConfirm={() => this.handlePersonDelete(person.id)}
                          okText="Yes"
                          cancelText="No"
                        >
                          <Button>Delete</Button>
                        </Popconfirm>
                      </div>}
          >
              {person.cars.length > 0 ? (
                person.cars.map((car, key) => {
                  return (
                    <Card type="inner"
                          title={car.year + " " + car.make + " " + car.model}
                          extra={<div>
                                  <Button onClick={() => this.handleCarEdit(car)}>Edit</Button>
                                  <Popconfirm
                                    title="Are you sure you want to delete this car?"
                                    onConfirm={() => this.handleCarDelete(car.id)}
                                    okText="Yes"
                                    cancelText="No"
                                  >
                                    <Button>Delete</Button>
                                  </Popconfirm>
                                </div>}
                          key={key}
                    >
                      {car.price}
                    </Card>
                  )
                })
              ) : <p>No Cars</p>}
          </Card>
          )
        })}

        <PersonModal
          title="Edit Person"
          visible={this.state.personEditVisible}
          onCancel={this.handleCancel}
          onFinish={this.onFinishEdit}
          person={this.state.person}
        />

        <PersonModal
          title="Create A New Person"
          visible={this.state.personCreateVisible}
          onCancel={this.handleCancel}
          onFinish={this.onFinishCreate}
        />

        <CarModal
          title="Edit Car"
          visible={this.state.carEditVisible}
          onCancel={this.handleCancel}
          onFinish={this.onFinishEditCar}
          car={this.state.car}
        />

        <CarModal
          title="Create A New Car"
          visible={this.state.carCreateVisible}
          onCancel={this.handleCancel}
          onFinish={this.onFinishCreateCar}
        />
      
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
      getPeople,
      addPerson,
      deletePerson,
      editPerson,
      addCar,
      deleteCar,
      editCar
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
