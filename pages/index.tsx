import axios from 'axios';
import { GetStaticProps } from 'next';
import React, { useState, useEffect } from 'react';

import { withLayout } from '../layout/Layout';
import { Tag, Rating, Htag, Button, Paragraph } from './../components';

import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
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
      <ul>
        {menu.map((menuElement) => (
          <li key={menuElement._id.secondCategory}>{menuElement._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
