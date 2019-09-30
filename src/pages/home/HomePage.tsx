import React from 'react';
import {useDispatch} from 'react-redux';
import {push} from 'connected-react-router';
import {RouteComponentProps} from 'react-router-dom'

interface Props extends RouteComponentProps {}


const HomePage: React.FC<Props> = props => {
  // const {history} =props;

  const dispatch = useDispatch();

  const handleNavigation = (): void => {
    dispatch(push('/about'));
  }

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={handleNavigation}>Go To About Page</button>
    </div>
  )
}

export default HomePage;
