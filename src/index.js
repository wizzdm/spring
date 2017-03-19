// @flow
import React from 'react';

export type IndexProps = {
  test: ?boolean,
};

export default function Index({ test }: IndexProps) {
  return (
    <div>{test ? 'Testing!' : 'Meow!'}</div>
  );
}
