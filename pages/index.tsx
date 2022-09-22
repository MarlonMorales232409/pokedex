import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'


const HomePage: NextPage = () => {
  console.log('hello')
  return (
    <div >
      <Button color={'gradient'}>
        Hello World
      </Button>
    </div>
  )
}

export default HomePage
