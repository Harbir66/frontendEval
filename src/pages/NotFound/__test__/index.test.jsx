import React from 'react';
import { render } from '@testing-library/react';
import PageNotFound from '../index';

describe('Error Page', () => {
  it('should render', () => {
    const { asFragment } = render(<PageNotFound />);
    expect(asFragment()).toMatchSnapshot();
  });
});
