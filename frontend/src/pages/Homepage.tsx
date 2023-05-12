import React from 'react'
import { PrimaryButton } from '../components/Buttons/PrimaryButton'
import { SecondaryButton } from '../components/Buttons/SecondaryButton'
import { Question } from '../components/Question/Question'
import { Opa } from '../components/OPA/Opa'

export const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
    <PrimaryButton />
    <SecondaryButton />
    <Opa />
    <Question />
    </div>
  )
}
