import React from 'react';
import axios from 'axios';

class ForgotPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.post(window.location.origin+'/login', {
      name: this.state.email,
    })
    .then(event => console.log(event))
    .catch(error => console.log(error));
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default ForgotPage;