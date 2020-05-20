import { createGlobalStyle } from 'styled-components';

import {
  violetDark,
} from 'assets/stylesheets/js/colors';

import 'assets/stylesheets/css/app.css';
import 'assets/stylesheets/css/reset.css';

export default createGlobalStyle`
  body {
    background-color: ${violetDark};
  }
`;
