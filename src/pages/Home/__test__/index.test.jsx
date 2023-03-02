import React from 'react';
import { render } from '@testing-library/react';
import Home from '../index';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('Error Page', () => {
  it('should render', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
