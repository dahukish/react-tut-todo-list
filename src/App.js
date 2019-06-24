import React from 'react';
import {Page, Stack, Layout, Button, Card, Checkbox} from '@shopify/polaris';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    todoList: {
      todo1: false,
      todo2: false,
      todo3: false,
      todo4: false,
    },
  };
  render() {
    const {todoList} = this.state;
    return (
      <Page title="React Todo List">
        <Layout>
          <Layout.Section>
            <Stack alignment="trailing"><Button primary>Add todo item</Button></Stack>
          </Layout.Section>
          <Layout.Section>
            <Card>
              <ul>
                <li><Checkbox id="todo1" name="todo1" label="Todo 1" checked={todoList.todo1} onChange={this.handleChange} /></li>
                <li><Checkbox id="todo2" name="todo2" label="Todo 2" checked={todoList.todo2} onChange={this.handleChange} /></li>
                <li><Checkbox id="todo3" name="todo3" label="Todo 3" checked={todoList.todo3} onChange={this.handleChange} /></li>
                <li><Checkbox id="todo4" name="todo4" label="Todo 4" checked={todoList.todo4} onChange={this.handleChange} /></li>
              </ul>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }

  handleChange = (value, id) => {
    console.log(value, id);
    this.setState((prevState) => ({
      ...prevState,
      todoList: {
        ...prevState.todoList,
        [id]: value,
      }
    }));
  };
}

export default App;
