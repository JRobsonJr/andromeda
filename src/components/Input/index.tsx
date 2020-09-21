import React from 'react'
import { Box, Input as BaseInput, Label, Text } from 'theme-ui'

const Input = ({ id, label, helperText }: InputProps) => (
  <Box sx={{ width: 'fit-content' }}>
    <Label htmlFor={id}>{label}</Label>
    <BaseInput id={id} placeholder={label} />
    <Text variant="default" sx={{ marginTop: 1, color: 'helperText' }}>{helperText}</Text>
  </Box>
)

interface InputProps {
  id: string
  label: string
  helperText?: string
}

export default Input
