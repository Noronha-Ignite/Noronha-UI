import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@noronha-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'H1 Heading',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2` mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
