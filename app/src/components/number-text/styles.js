import { css } from 'emotion'

export const root = css`
  text-align: center;
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);

  & + & {
    margin-left: 3%;
  }
`

export const number = css`
  color: #8f6ed5;
  font-size: 30px;
  margin-bottom: 14px;
  margin-top: 7px;
`
export const text = css`
  line-height: 16px;
`
