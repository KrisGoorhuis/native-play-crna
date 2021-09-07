import styles from './stepOneStyles'
import React from 'react'
import { Button } from '@material-ui/core'
import { View, Text } from 'react-native'


interface StepZeroProps {
   incrementStep : () => void
}

const StepZero = (props: StepZeroProps) => {
   const classes = styles()
   let ref = React.createRef() as any // No TS types - https://github.com/embiem/react-canvas-draw

  const handleStepOneFinish = () => {
     console.log("Is this running?")
     console.log(ref.current)
     console.log(ref.current.getSaveData())
   //   props.saveDrawing(ref.current.getSaveData())
   //   props.incrementStep()
  }


   return (
      <View >
         <Text>
            Welcome! Don't worry about the particulars, we can get started
            immediately if you're ready.
         </Text>
         <Button onClick={props.incrementStep}>
            <Text>
               button
            </Text>
         </Button>
      </View>
   )
}

export default StepZero
