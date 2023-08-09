import * as RadTooltip from '@radix-ui/react-tooltip'
import * as S from './styles'
import { PropsWithChildren } from 'react'

export type TooltipProps = RadTooltip.TooltipProviderProps & {
  tooltipContent: React.ReactNode
}

export const Tooltip = ({
  children,
  tooltipContent,
  ...props
}: PropsWithChildren<TooltipProps>) => {
  return (
    <RadTooltip.TooltipProvider
      skipDelayDuration={0}
      delayDuration={0}
      {...props}
    >
      <RadTooltip.Root>
        <RadTooltip.Trigger asChild>{children}</RadTooltip.Trigger>

        <RadTooltip.Portal>
          <S.ContentWrapper sideOffset={5}>
            {tooltipContent}
            <S.TooltipArrow />
          </S.ContentWrapper>
        </RadTooltip.Portal>
      </RadTooltip.Root>
    </RadTooltip.TooltipProvider>
  )
}
