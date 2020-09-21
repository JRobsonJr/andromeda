import React from 'react'

import Text from './index'

export default {
  title: 'Text',
  component: Text,
}

export const SimpleText = () => (
  <Text>Little League</Text>
)

export const TextWithVariant = () => (
  <Text variant="folklore">FOLKLORE, by Taylor Swift</Text>
)
