import React, { ButtonHTMLAttributes } from 'react'
import { CustomButtonContainer, IconContainer } from './styled'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode
}

export function CustomButton ({ startIcon, children, ...rest } : CustomButtonProps) {
  return (
    <CustomButtonContainer {...rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}

      {children}
    </CustomButtonContainer>
  )
}
