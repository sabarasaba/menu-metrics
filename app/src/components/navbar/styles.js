import { css } from 'emotion'

export const root = css`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #FFF;

  & a {
    display: flex;
    align-items: center;
    border-bottom: 1px solid currentColor;
  }
`

export const link = css`
  color: red;
`
