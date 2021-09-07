import { 
   makeStyles, 
   Theme, 
   createStyles 
}                   from "@material-ui/core"


const useStyles = makeStyles((theme: Theme) => 
   createStyles({
      container: {
         backgroundColor: '#eeedef',
         paddingTop: 100,
         fontFamily: 'Raleway',
         minHeight: '100vh',
         paddingLeft: 30, 
         paddingRight: 30,
      },
      contents: {
         margin: 'auto',
         maxWidth: 800,
         borderRadius: 8,
      },
   })
)

export default useStyles
