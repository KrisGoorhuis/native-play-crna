import styles from './stepOneStyles'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { DrawingData, Point } from '../../model/DrawingData'

interface StepOneProps {
   drawingData : DrawingData
   incrementStep : () => void
}

const radius = 10 // Move elsewhere? To UI controls?

const StepTwo = (props: StepOneProps) => {
   const classes = styles()

   const handleStepOneFinish = () => {
      props.incrementStep()
   }

   React.useEffect(() => {
      const ctx = (document.getElementById("canvas") as HTMLCanvasElement).getContext("2d")
      let previousPoint: Point | null = null

      for (const line of props.drawingData.lines) {
         for (const point of line.points) {
            if (previousPoint) { // Connect the dots
               console.log("Drawing a line between: ", previousPoint, point)
               ctx.beginPath()
               ctx.lineWidth = radius * 2
               ctx.moveTo(parseFloat(previousPoint.x), parseFloat(previousPoint.y))
               ctx.lineTo(parseFloat(point.x), parseFloat(point.y))
               ctx.stroke()
            }

            ctx.beginPath()
            ctx.arc(parseFloat(point.x), parseFloat(point.y), radius, 0, 2 * Math.PI)
            ctx.fill()

            previousPoint = point
         }
      }
   }, [])

   return (
      <View>
         <View>
            <Text>
               Step two. Drawn thing
            </Text>
         </View>
         <View>
            <canvas id="canvas" width={600} height={500}></canvas>
         </View>
         <Button title={"Button!"} onPress={handleStepOneFinish} />
      </View>
   )
}

export default StepTwo
