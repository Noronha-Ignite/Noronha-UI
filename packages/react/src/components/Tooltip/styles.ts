import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})
const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})
const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})
const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

export const ContentWrapper = styled(Tooltip.Content, {
  fontFamily: '$default',
  color: '$gray100',
  fontSize: '$sm',

  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  boxShadow: '4px 16px 24px 0px rgba(0, 0, 0, 0.25)',

  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',

  '&[data-state="delayed-open"][data-side="top"]': {
    animationName: slideDownAndFade,
  },
  '&[data-state="delayed-open"][data-side="right"]': {
    animationName: slideLeftAndFade,
  },
  '&[data-state="delayed-open"][data-side="bottom"]': {
    animationName: slideUpAndFade,
  },
  '&[data-state="delayed-open"][data-side="left"]': {
    animationName: slideRightAndFade,
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
