import type { StoryObj, Meta } from '@storybook/react'
import { AvatarProps, Avatar } from '@noronha-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/Noronha1612.png',
    alt: 'Gabriel Noronha',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
