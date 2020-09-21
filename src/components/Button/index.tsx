import React, { ReactNode } from 'react'
import { Button as ThemeUIButton } from 'theme-ui'
import { Button as ReakitButton } from 'reakit'

const Button = ({ children }: ButtonProps) => (
  <ReakitButton>
    {(props) => <ThemeUIButton {...props}>{children}</ThemeUIButton>}
  </ReakitButton>
)

interface ButtonProps {
  children: ReactNode
}

export default Button
