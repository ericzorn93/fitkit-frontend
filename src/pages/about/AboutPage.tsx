import React from 'react'
import {useDispatch} from 'react-redux'
import { RouterProps } from 'react-router';
import { push } from 'connected-react-router';

interface Props extends RouterProps {}

const AboutPage: React.FC<Props> = props => {
  const dispatch = useDispatch();

  const handleNavigation = () => {
    dispatch(push('/'))
  }

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleNavigation}>Go Home</button>
    </div>
  )
}

export default AboutPage;
