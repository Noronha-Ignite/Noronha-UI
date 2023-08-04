import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@noronha-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate consectetur ad culpa numquam perferendis iusto eveniet quod laudantium quo architecto nihil distinctio accusantium modi, aperiam ut sit suscipit saepe soluta?',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Strong: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'Strong Text',
  },
}
