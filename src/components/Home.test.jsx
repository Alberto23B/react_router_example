import { render, screen } from '@testing-library/react'
import React from 'react';
import Home from "./Home"

test("Example 1 renders successfully", () => {
    render(<Home/>);

    const element = screen.getByText(/home/i);

    expect(element).toBeInTheDocument();
})