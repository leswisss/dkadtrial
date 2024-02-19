import React from 'react'
import { solutionProps } from '@/types'

interface SolutionsProp{
  solutions: solutionProps[]
}

const Modal = ({solutions}: SolutionsProp) => {
  return (
    <div>Modal</div>
  )
}

export default Modal