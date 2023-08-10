import * as RadToast from '@radix-ui/react-toast'
import React, { PropsWithChildren } from 'react'
import * as S from './styles'
import { X } from 'phosphor-react'

export type ToastProps = {
  title: string
  content: string
} & RadToast.ToastProps

export const ToastProvider = ({
  children,
  ...props
}: PropsWithChildren<RadToast.ToastProviderProps>) => (
  <RadToast.ToastProvider {...props}>
    {children}
    <S.ToastViewport />
  </RadToast.ToastProvider>
)

export const Toast = ({ title, content, ...props }: ToastProps) => {
  return (
    <S.ToastContainer {...props}>
      <header>
        <S.ToastTitle>{title}</S.ToastTitle>
        <S.ToastClose>
          <X />
        </S.ToastClose>
      </header>
      <S.ToastDescription>{content}</S.ToastDescription>
    </S.ToastContainer>
  )
}

Toast.displayName = 'Toast'
