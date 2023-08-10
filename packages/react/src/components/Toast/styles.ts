import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
})

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

export const ToastContainer = styled(Toast.Root, {
  border: '1px solid $gray600',
  backgroundColor: '$gray800',

  padding: '$3 $5',

  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  borderRadius: '$sm',

  '& header': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  '&[data-state="open"]': {
    animationName: slideIn,
    animationDuration: '150ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },

  '&[data-state="closed"]': {
    animationName: hide,
    animationDuration: '100ms',
    animationTimingFunction: 'ease-in',
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animationName: swipeOut,
    animationDuration: '100ms',
    animationTimingFunction: 'ease-out',
  },
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontWeight: '$bold',
  fontSize: '$xl',
  fontFamily: '$default',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',

  cursor: 'pointer',

  svg: {
    color: '$gray200',
  },
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
  fontFamily: '$default',
})

export const ToastViewport = styled(Toast.Viewport, {
  '--viewport-padding': '24px',

  width: 364,
  maxWidth: '100vw',

  position: 'fixed',
  bottom: 0,
  right: 0,

  padding: 'var(--viewport-padding)',
  margin: 0,
  listStyle: 'none',

  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})
