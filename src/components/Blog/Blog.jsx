import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import TitleBanner from '../TitleBanner/TitleBanner';

const Blog = () => {
  return (
    <div >
      <TitleBanner>Blog</TitleBanner>
      <div className='container mt-5 p-5'>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>1. When should we use Context API?</Accordion.Header>
            <Accordion.Body>
              Context API is an alternative to props drilling provided by React. When there is a data which needs to be sent to a child component from parent component but there are many intermediate component, in these type of cases, context api does a great job by making the data available to all the child components without the redundant process of props drilling. Such scenarios are : making user data available to all components, setting theme, storing language etc.            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>2. What is Custom hook?</Accordion.Header>
            <Accordion.Body>
              Custom hook is a reuseable function which can be used my multiple components in order to apply the same logic in different cases and places.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>3. What is useRef?</Accordion.Header>
            <Accordion.Body>
              useRef is a React Hook that lets you keep track of values between renders. It can be used to store a mutable value that does not trigger a re-render when updated. It can also be used to access a DOM element directly.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>4. What is useMemo?</Accordion.Header>
            <Accordion.Body>
              useMemo is a React Hook that lets you store the result of a function between renders. This can be useful for slow operations, such as fetching data from an API or performing complex calculations.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion></div>
    </div>
  );
};

export default Blog; <h4>blog</h4>