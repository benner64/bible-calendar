import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';


import Layout from './LayoutComponent';

describe(`Navbar`, () => {
  it(`renders the Layout component`, () => {
    render(<Layout>Test</Layout>);

    expect(screen.getByText(`Test`)).toBeInTheDocument();
  });
});
