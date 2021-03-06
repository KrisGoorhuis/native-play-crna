import styles from './indexStyles'
import React from 'react'
import { Paper } from '@material-ui/core'
import { View, Text } from 'react-native'
import StepZero from './Steps/stepZero'
import StepOne from './Steps/stepOne'
import StepTwo from './Steps/stepTwo'
import { DrawingData } from '../model/DrawingData'

const Index = () => {
   const classes = styles()
   const [step, setStep] = React.useState<number>(0)
   const [drawingData, setDrawingData] = React.useState<DrawingData | null>(null)

   let ref = React.createRef() as any // No TS types - https://github.com/embiem/react-canvas-draw

   const saveDrawingData = (data: DrawingData) => {
      console.log('data')
      console.log(data)
      setDrawingData(data)
   }

   const incrementStep = () => {
      setStep(step + 1)
   }

   const getStep = () => {
      switch (step) {
         case 0:
            return <StepZero incrementStep={incrementStep} />
         case 1:
            return (
               <StepOne
                  incrementStep={incrementStep}
                  saveDrawing={saveDrawingData}
               />
            )
         case 2:
            return (
               <StepTwo
                  drawingData={drawingData}
                  incrementStep={incrementStep}
               />
            )
         default:
            return <View><Text>You've reached the default</Text></View>
      }
   }

   return (
      <View>
         {  
            getStep()
         }
      </View>
   )
}

export default Index
