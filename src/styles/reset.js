import { css } from 'styled-components';

export default css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::selection {
    background-color: rgb(var(--gold));
    color: rgb(var(--white));
  }

  body {
    font-family: var(--fontNormal);
    background-color: rgb(var(--white));
    color: rgb(var(--grey));
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 0;

    &:focus {
      outline: 0;
    }
  }

  ol,
  ul {
    list-style: none;
  }

  input,
  textarea {
    &:focus {
      outline: 0;
    }
  }
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }
  img {
    display: block;
    max-width: 100%;
    width: 100%;
  }
`;
