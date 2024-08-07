import { Carroussel } from '../Carroussel'
import { Header } from '../Header/'
import { Cars } from '../ModelCarsHome'
import { Showcase } from '../Showcase/index'

export const HomePage = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Carroussel />
      <Cars />
    </>
  )
}