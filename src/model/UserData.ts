export type DrawingData = {
   width: number
   height: number
   lines: Line[]
}

type Line = {
   brushColor: string
   brushRadius: 10
   points: Point[]
}

type Point = { x: string; y: string }
