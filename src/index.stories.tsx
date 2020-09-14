import React from 'react'
import { Example } from '.'

export default {
  title: 'Example',
  component: Example,
}

export const Text = () => <Example text="Storybooks Text Example" />

export const Emoji = () => <Example text="😀 😎 👍 💯" />
