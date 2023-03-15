import { Component } from 'react';
import toast from 'react-hot-toast';
import { Button, Form, Input, Header, Span } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };

  // handleChange = ({ target: { value } }) => {
  //   this.setState({ value });
  // };

  handleSubmit = e => {
    e.preventDefault();
    // if (!this.state.value) {
    //   return toast.error('Error!');
    // }
    if (this.state.value.trim() === '') {
      return toast.error('Поле не може бути пустим!');
    }
    this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <Span>Search</Span>
          </Button>

          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
