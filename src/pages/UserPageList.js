import React, { Component } from 'react';
import axios from 'axios';
const API_URL = 'https://reqres.in/api/users.';

class App extends Component {
  state = {
    users: []
  }
  componentDidMount() {

    axios.get(API_URL).then(response => response.data)
    .then((data) => {
      this.setState({users : data.data})
      console.log(this.state.users)
    })
  }

  render() {
    return (
      <div className="container">
      <div className="col-xs-8">
      <h1>React Axios Example</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Year</th>
            <th>Color</th>
            <th>Pantone</th>
          </tr>
        </thead>
        <tbody>
        {this.state.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.year}</td>
            <td>{user.color}</td>
            <td>{user.pantone_value}</td>
          </tr>
        ))}
        </tbody>
        </table>
      </div>
     </div>
    );
  }
}
export default App;