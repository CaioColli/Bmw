import { Carroussel } from './Carroussel/index'
import { Cars } from './ModelCarsHome/index'
import { M5Presentation } from './M5Presentation'
import { Showcase } from './Showcase/index'

export const HomePage = () => {
  return (
    <>
      <Showcase />
      <Carroussel />
      <Cars />
      <M5Presentation />
    </>
  )
}