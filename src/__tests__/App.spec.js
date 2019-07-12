import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';
import { render } from '@testing-library/react';
import App from '../App.js';

describe('<App />', () => {
      it('should render the App component without errors', () => {
            render(<App />);
      });
})