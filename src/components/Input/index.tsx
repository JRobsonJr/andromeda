import React from 'react'
import { Box, Input as BaseInput, Label, Text } from 'theme-ui'

const Input = ({ id, label, helperText }: InputProps) => (
  <Box sx={{ width: 'fit-content' }}>
    <Label htmlFor={id} sx={{ fontSize: 1, marginBottom: 1 }}>
      {label}
    </Label>
    <BaseInput id={id} placeholder={label} />
    <Text sx={{ fontSize: 0, marginTop: 1 }}>{helperText}</Text>
  </Box>
)

interface InputProps {
  id: string
  label: string
  helperText?: string
}

export default Input
