import styles from './stepOneStyles'
import React from 'react'
import { Button, Paper } from '@material-ui/core'
import CanvasDraw from 'react-canvas-draw'
import { View, Text } from 'react-native'
import { DrawingData } from '../../model/UserData'

interface StepOneProps {
   drawingData : DrawingData
   incrementStep : () => void
}

const StepTwo = (props: StepOneProps) => {
   const classes = styles()

   const handleStepOneFinish = () => {
      props.incrementStep()
   }

   React.useEffect(() => {
      const ctx = (document.getElementById("canvas") as HTMLCanvasElement).getContext("2d")

      for (const line of props.drawingData.lines) {
         for (const point of line.points) {
            ctx.beginPath()
            ctx.arc(parseFloat(point.x), parseFloat(point.y), 10, 1, 10)
            ctx.fill()
         }
      }
   }, [])

   return (
      <View>
         <Paper>
            <div>
               <Text>
                  Step two. Drawn thing
               </Text>
            </div>
            <View>
               <canvas id="canvas" width={600} height={500}></canvas>
            </View>
            <Button onClick={handleStepOneFinish}>
               button
            </Button>
         </Paper>
      </View>
   )
}

export default StepTwo
