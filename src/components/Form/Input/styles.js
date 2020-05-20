import styled from 'styled-components';

import * as colors from 'assets/stylesheets/js/colors';
import * as sizes from 'assets/stylesheets/js/sizes';

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${sizes.sm()};
`;

export const FormInputLabel = styled.label`
  color: ${colors.violetLight};
  padding-bottom: ${sizes.xs()};
`;

export const FormInputField = styled.input`
  border: 2px solid ${colors.violetLight};
  border-radius: ${sizes.xs()};
  line-height: ${sizes.md()};
  padding: 0 ${sizes.sm()};
  color: ${colors.violetLight};

  &::placeholder {
    color: #ccc;
  }
`;

export const FormInputRequired = styled.span`
  color: ${colors.red};
  margin-left: ${sizes.xs(0.5)};
`;

export const FormInputError = styled.span`
  color: ${colors.red};
  padding: ${sizes.xs()} 0;
`;


export default FormInputContainer;
