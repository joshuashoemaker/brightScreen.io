import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './Home.css'

import logo from '../../media/logoBlue.svg'
import { Button, Header, Image, List, Segment, Icon } from 'semantic-ui-react'

interface CourseInterface {
  name: string,
  repo: string,
  username: string,
  link: string
}

type HomeProps = {}
type HomeState = { courses: CourseInterface[] }

class Home extends Component<HomeProps, HomeState> {
  constructor (props = {}) {
    super(props)
    this.state = {courses: []}
  }

  async componentDidMount () {
      const courses = await (await fetch('/api/courses')).json()
      this.setState({courses: courses})
  }

  getCourseElements (courses: CourseInterface[]) {
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
            brightScreen is an extention for your favorite text editor (as long as your text
            editor is VS Code) that brings interactive coding tutorials to help bring a new
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
                <Header.Subheader><Button fluid basic href='mailto:joshua@jshoemaker.dev' as='a'>Contact to Add Course</Button></Header.Subheader>
              </Header.Content>
            </Header>
            <List divided relaxed>
              { this.getCourseElements(this.state.courses)}
            </List>
          </Segment>
        </section>

      </div>
    )
  }
}

export default Home
