export type DrawingData = {
   width: number
   height: number
   lines: Line[]
}

export type Line = {
   brushColor: string
   brushRadius: 10
   points: Point[]
}

export type Point = { x: string; y: string }
