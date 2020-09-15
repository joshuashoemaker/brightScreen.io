import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Header, Image, List, Segment, Icon, Modal, Input } from 'semantic-ui-react'
import logo from '../../media/logoBlue.svg'
import './Home.css'

import CourseInterface from '../Interfaces/CourseInterface'
import RequestCourseController from '../../Controllers/RequestCourseController'

type HomeProps = {}
type HomeState = {
  courses: CourseInterface[],
  requestAddCourseFormOpen: boolean,
  githubRepo: string,
  contactName: string,
  email: string
}

class Home extends Component<HomeProps, HomeState> {

  requestCourseController: RequestCourseController

  constructor (props = {}) {
    super(props)
    this.state = {
      courses: [],
      requestAddCourseFormOpen: false,
      githubRepo: '',
      contactName: '',
      email: ''
    }

    this.requestCourseController = new RequestCourseController()
  }

  async componentDidMount () {
      const courses = await (await fetch('/api/courses')).json()
      this.setState({courses: courses})
  }

  setOpen (value: boolean) {
    this.setState({ requestAddCourseFormOpen: value })
  }

  async submitCourse () {
    const { email, contactName, githubRepo } = this.state
    const addCourseResponse = await this.requestCourseController.handleAddCourseRequest({ email, contactName, githubRepo })
    if (addCourseResponse.status === 'OK') {
      window.alert(addCourseResponse.messages[0])
      this.setOpen(false)
    } else {
      window.alert(addCourseResponse.messages[0])
    }
  }

  renderCourseElements (courses: CourseInterface[]) {
    if (!courses) return []

    const coureseElements = courses.map((c: CourseInterface ) => {
      return (
        <List.Item>
          <List.Icon name='github' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a' style={{ color: 'rgb(102,252,241)' }} href={c.link} target='_blank' rel='noopener noreferrer'>{c.name}</List.Header>
            <List.Description>by: { c.username } </List.Description>
          </List.Content>
        </List.Item>
      )
    })
    return coureseElements
  }

  render(): JSX.Element {
    return (
      <div className="Home">
        <header>
          <section className='homeContentWrapper'>
            <Image centered size='large' src={logo} />
            <Header as='h1' textAlign='center'>
              <Header.Content>
                brightScreen ()
                <Header.Subheader>Code Challanges For VS Code</Header.Subheader>
              </Header.Content>
            </Header>
            <Button as='a' href='https://github.com/joshuashoemaker/brightScreen' target='_blank' rel='noopener noreferrer' fluid basic>README</Button>
          </section>
        </header>

        <section>
          <Segment className='homeInfoColumn'>
            brightScreen is an extention for your favorite text editor (as long as your favorite
            editor is VS Code) that brings interactive coding challenges to help bring a new
            dynamic to learning. Instead of just following along with an article or video,
            you can download coding challanges that help solidify those theoretical lessons
            into something tangible.
            <Button  as='a' href='https://github.com/joshuashoemaker/brightScreen' target='_blank' rel='noopener noreferrer' style={{ backgroundColor: 'rgb(102,252,241)', color: 'black' }} fluid primary>LEARN</Button>
          </Segment>

          <Segment className='homeInfoColumn'>
            brightScreen is a great place for software instructors to create interactive
            homework for those that follow their courses, videos, or articles. The amount
            of effort in seting up a brightScreen course is virtually non existant.
            <Button fluid basic href='mailto:joshua@jshoemaker.dev' as='a'>TEACH</Button>
          </Segment>
        </section>

        <section className='courseList'>
          <Segment className=''>
            <Header as='h2' textAlign='center' icon>
              <Icon name='code' />
              <Header.Content>
                Current Courses
                <Header.Subheader>

                <Modal
                  className='requestAddCourseForm'
                  onClose={() => this.setOpen(false)}
                  onOpen={() => this.setOpen(true)}
                  open={this.state.requestAddCourseFormOpen}
                  trigger={<Button fluid basic >Request to Add Course</Button>}
                >
                  <Modal.Header>Add Course to Waitlist</Modal.Header>
                  <Modal.Content>
                    <Modal.Description>
                      We wish to verify every course submission to make sure it meets our standards. 
                      Enter all the details below and we will varify it as quickly as possible.
                    </Modal.Description>
                    <Input className='courseInput' fluid label='Course Name' onChange={(e) => this.setState({contactName: e.target.value})}></Input>
                    <Input className='courseInput' fluid label='Contact Email' onChange={(e) => this.setState({email: e.target.value})}></Input>
                    <Input className='courseInput' fluid label='GitHub Repo' onChange={(e) => this.setState({githubRepo: e.target.value})}></Input>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button basic onClick={() => this.setOpen(false)}>Later</Button>
                    <Button
                      positive
                      onClick={() => {this.submitCourse()}}
                      style={{ backgroundColor: 'rgb(102,252,241)', color: 'black' }}
                    >
                      Submit
                    </Button>
                  </Modal.Actions>
                </Modal>                
                
                </Header.Subheader>
              </Header.Content>
            </Header>
            <List divided relaxed>
              { this.renderCourseElements(this.state.courses)}
            </List>
          </Segment>
        </section>
      </div>
    )
  }
}

export default Home
