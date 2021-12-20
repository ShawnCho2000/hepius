import React, { Component } from 'react'
import { Input, Menu, Segment, Grid, GridRow, Button } from 'semantic-ui-react'

import logo from './media/images/logo.png';

export default class MenuExamplePointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Row style={{backgroundColor: "#32a1ff"}}>
          <Grid.Column width = {1}>
          </Grid.Column>
          <Grid.Column width = {3}>
            <img src={logo} alt="logo of company" style={{height: "100px"}}/>
          </Grid.Column>
          <Grid.Column width = {8}>
            <Input icon='search' placeholder='Search...' style = {{height: "50%", width: "80%", margin: '3% auto 0% 10%'}} size = {"massive"}/>
          </Grid.Column>
          <Grid.Column>
            <Grid.Row>
            <div style = {{display: "flex", flexDirection: "row", margin: "10px 0"}}>
              <Button primary>LogIn</Button>
              <Button secondary>LogOut</Button>
            </div>
            </Grid.Row>
            <GridRow>
            </GridRow>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Menu pointing>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='messages'
              active={activeItem === 'messages'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='gganbu'
              active={activeItem === 'friends'}
              onClick={this.handleItemClick}
            />
          </Menu>

          {/* <Segment>
            <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Segment> */}
        </Grid.Row>
      </Grid>
    )
  }
}