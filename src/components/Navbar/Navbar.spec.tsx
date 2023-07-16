import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';

import Navbar from './NavbarComponent';

describe(`Navbar`, () => {
  it(`renders the Navbar component`, () => {
    render(<Navbar/>);

    expect(screen.getByText(`Church calendar`)).toBeInTheDocument();
  });
});
