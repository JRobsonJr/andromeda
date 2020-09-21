import React, { ReactNode } from 'react'
import { Text as ThemeUIText } from 'theme-ui'

const Text = ({ children, variant }: TextProps) => (
  <ThemeUIText variant={variant}>{children}</ThemeUIText>
)

interface TextProps {
  children: ReactNode
  variant?: string
}

export default Text
