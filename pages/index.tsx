import React from 'react';
import { Htag, Button } from './../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Hello world</Htag>
      <Button type="primary">Press me</Button>
      <Button type="ghost">Click me</Button>
    </>
  );
}
