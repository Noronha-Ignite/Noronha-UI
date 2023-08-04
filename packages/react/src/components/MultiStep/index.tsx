import { ComponentProps } from 'react'
import { Label, MultiStepContainer, Step, Steps } from './styles'

export type MultiStepProps = ComponentProps<typeof MultiStepContainer> & {
  size: number
  currentStep?: number
}

export const MultiStep = ({
  currentStep = 1,
  size,
  ...props
}: MultiStepProps) => {
  return (
    <MultiStepContainer {...props}>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <Step key={step} active={currentStep >= step}></Step>
        ))}
      </Steps>
    </MultiStepContainer>
  )
}
