import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import withAuth from '../components/hoc/withAuth';
import { Button, Container } from 'reactstrap';
import { Router } from '../routes';

class Index extends React.Component {
  static async getInitialProps() {
    let userData = {};
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      userData = response.data;
    } catch (err) {
      console.error(err);
    }
    return { initialData: [1, 2, 3, 4], userData };
  }

  constructor(props) {
    super(props);
    this.state = {
      title: 'I am Index Page',
    };
  }

  updateTitle = () => {
    this.setState({ title: 'I am Updated Index Page' });
  };

  render() {
    const { initialData } = this.props;
    console.log(initialData);
    return (
      <Container>
        <h1>안녕하세요?</h1>
        <Button className="mt-3" color="primary" onClick={() => Router.push('/login')}>로그인하러가기</Button>
      </Container>
    );
  }
}

export default Index;
