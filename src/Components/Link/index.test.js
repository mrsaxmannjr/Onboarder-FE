Error.stackTraceLimit = 50;

import React from 'react';
import Link from './';
import renderer from 'react-test-renderer';

describe("Link", () => {
it('renders correctly', () => {
  const tree = renderer
    .create(<Link link={"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url"}>Mozilla</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
})