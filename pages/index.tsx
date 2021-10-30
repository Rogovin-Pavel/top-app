import React, { useState, useEffect } from 'react';
import { withLayout } from '../layout/Layout';

import { Tag, Rating, Htag, Button, Paragraph } from './../components';

function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);

  useEffect(() => {
    console.log(counter);
    return function () {
      console.log('cleaned up');
    };
  }, [counter]);

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button appearance="primary" arrow="right" onClick={() => setCounter((x) => x + 1)}>
        Press me
      </Button>
      <Button appearance="ghost" arrow="right">
        Click me
      </Button>

      <Tag size="small" color="ghost">
        small ghost
      </Tag>
      <Tag color="red">medium red</Tag>
      <Tag size="small" color="green">
        small green
      </Tag>
      <Tag color="gray">medium gray</Tag>
      <Tag href="https://vk.com/id239609752" size="small" color="primary">
        small primary
      </Tag>

      <Paragraph size="small">Hello guys, how are you?</Paragraph>
      <Paragraph>Hello guys, how are you?</Paragraph>
      <Paragraph size="big">Hello guys, how are you?</Paragraph>
      <Rating rating={rating} setRating={setRating} isEditable />
    </>
  );
}

export default withLayout(Home);
