import * as React from 'react'

interface ExampleProps {
  text: string
}

const Example: React.FunctionComponent<ExampleProps> = ({ text }: ExampleProps) => {
  return <div>Example Component: {text}</div>
}

export { Example, ExampleProps }
