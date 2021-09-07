import styles from './stepOneStyles'
import React from 'react'
import { Button, Paper } from '@material-ui/core'
import CanvasDraw from 'react-canvas-draw'
import { View, Text } from 'react-native'

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
         <Paper>
            <div>
               <Text>
                  First, drag the brush around to draw our first image.
               </Text>
            </div>
            <View>
               <CanvasDraw ref={ref} />
            </View>
            <Button onClick={handleStepOneFinish}>
               button
            </Button>
         </Paper>
      </View>
   )
}

export default StepOne
