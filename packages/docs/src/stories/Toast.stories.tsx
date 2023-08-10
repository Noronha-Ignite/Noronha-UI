import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps, ToastProvider } from '@noronha-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    content: 'Quarta-feira, 23 de Outubro às 16h',
    open: true,
  },
  decorators: [
    (Story) => {
      return <ToastProvider swipeDirection="right">{Story()}</ToastProvider>
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
