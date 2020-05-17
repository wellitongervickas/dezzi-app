import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import * as sizes from 'assets/stylesheets/js/sizes';
import * as colors from 'assets/stylesheets/js/colors';

export const ContactsListItemContainer = styled.div`
  display: flex;
  margin-bottom: ${sizes.sm()};

  @media screen and (max-width: ${sizes.tablet}) {
    margin-bottom: ${sizes.md()};
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (max-width: ${sizes.tablet}) {
    flex-direction: column;
  }
`;

export const ContactsListItemButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${sizes.xs()};

  & > :last-child {
    margin-left: ${sizes.sm()}
  }

  @media screen and (max-width: ${sizes.tablet}) {
    margin-left: 0;

    & > * {
      flex: 1;
    }
  }
`;

export const ContactsListItemDetails = styled(NavLink)`
  flex: 1;
  display: flex;
  padding: ${sizes.sm()};
  border-radius: ${sizes.sm()};
  flex-direction: column;

  & > * {
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: ${sizes.xs()};
  }

  @media screen and (max-width: ${sizes.tablet}) {
    padding: 0;
  }

  @media (min-width: ${sizes.tablet}) {
    &.active, &:hover {
      background-color: #eee;
    }
  }
`;

export const ContactsListEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: ${sizes.xl(2)};

  color: ${colors.violetDark};
`;

export const ContactsListEmptyText = styled.div`
  font-size: ${sizes.sm()};
  margin-bottom: ${sizes.md()};
`;

export const ContactsListEmptyIcon = styled.div`
  font-size: ${sizes.lg()};
`;

export default ContactsListItemContainer;
