import {ReactNode} from 'react'
import './button.scss';

export interface Props {
  type?: 'button' | 'submit' | 'reset'
  children: ReactNode | Array<ReactNode>
}

function Button ({children, type = 'button'}: Props) {
  return (
    <button  className={'sneakers-button'} type={type}>{children}</button>
  )
}

export default Button
