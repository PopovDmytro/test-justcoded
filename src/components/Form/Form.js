import React, {Component} from 'react';
import Input from "./Input";

class Form extends Component {

  state = {
    login: '',
    password: ''
  };

  handleInputChange = (e) => {
    const {target} = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.writeDataToStorage(this.state.login, this.state.password);
  };

  render() {
    const {inputs} = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        {inputs.map((input, i) => (
          <Input key={i}
                 value={this.state[input.name]}
                 onChange={this.handleInputChange}
                 {...input} />
        ))}
        <button type="submit"
                className="btn btn-primary">Submit
        </button>
      </form>
    );
  }
}

export default Form;
