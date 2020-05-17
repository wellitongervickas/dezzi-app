import styled from 'styled-components';

import * as sizes from 'assets/stylesheets/js/sizes';
import * as colors from 'assets/stylesheets/js/colors';

export const FormButtonContainer = styled.button`
  color: ${colors.white};
  border: none;
  border-radius: ${sizes.xs()};
  font-size: 0.7rem;

  ${(props) => props.size === 'xs' && `
    padding: ${sizes.xs(0.5)} ${sizes.xs()};
  `}

  ${(props) => props.size === 'sm' && `
    padding: ${sizes.xs()} ${sizes.sm()};
  `}

  ${(props) => props.size === 'md' && `
    padding: ${sizes.sm()} ${sizes.md()};
    font-size: 1rem;
  `}

  ${(props) => props.size === 'lg' && `
    padding: ${sizes.md()} ${sizes.lg()};
    font-size: 1.3rem;
  `}

  ${(props) => props.size === 'xl' && `
    padding: ${sizes.lg()} ${sizes.xl()};
    font-size: 1.5rem;
  `}

  ${(props) => props.color === 'red' && `
    background-color: ${colors.red};
  `}

  ${(props) => props.color === 'violet' && `
    background-color: ${colors.violetLight};
  `}

  ${(props) => props.color === 'violet-dark' && `
    background-color: ${colors.violetDark};
  `}

  ${(props) => props.color === 'violet-dark-black' && `
    background-color: ${colors.violetDarkBlack};
  `}
`;

export const FormButtonLabel = styled.span`
  ${(props) => props.useIcon && `
    padding-left: ${sizes.xs()};
  `};
`;

export default FormButtonContainer;
