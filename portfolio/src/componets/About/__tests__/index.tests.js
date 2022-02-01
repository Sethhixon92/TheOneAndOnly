import React from 'react';
import { render, cleanup } from '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

describe('About component', () => {
    // First test
    it('renders', () => {
        render(<About />);
    });
    //Second test
})


afterEach(cleanup);