import React from 'react'
import { Box } from 'theme-ui'

interface ExampleProps {
  text: string
}

const Example = ({ text }: ExampleProps) => {
  return <Box sx={{ fontSize: 0 }}>Example Components: {text}</Box>
}

export { Example, ExampleProps }
