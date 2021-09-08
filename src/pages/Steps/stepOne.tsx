import styles from './stepOneStyles'
import React from 'react'
import CanvasDraw from 'react-canvas-draw'
import { View, Text, Button } from 'react-native'

interface StepOneProps {
   saveDrawing: (data: {}) => void
   incrementStep: () => void
}

const StepOne = (props: StepOneProps) => {
   const classes = styles()
   let ref = React.createRef() as any // No TS types - https://github.com/embiem/react-canvas-draw

   const handleStepOneFinish = () => {
      props.saveDrawing(JSON.parse(ref.current.getSaveData()))
      props.incrementStep()
   }

   return (
      <View>
         <View>
            <Text>
               First, drag the brush around to draw our first image.
            </Text>
         </View>
         <View>
            <CanvasDraw ref={ref} />
         </View>
         <Button title="buttooooon" onPress={handleStepOneFinish} />
      </View>
   )
}

export default StepOne
