import React from 'react'

import Input from './index'

export default {
  title: 'Input',
  component: Input,
}

export const SimpleInput = () => (
  <Input
    id="folklore"
    label="Purple-Pink Skies"
    helperText="Isn't it just so pretty to think?"
  />
)
