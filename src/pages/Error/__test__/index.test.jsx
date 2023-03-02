import React from 'react';
import { render } from '@testing-library/react';
import Error from '../index';

describe('Error Page', () => {
  it('should render', () => {
    const { asFragment } = render(<Error />);
    expect(asFragment()).toMatchSnapshot();
  });
});
