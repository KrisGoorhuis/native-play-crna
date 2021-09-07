import { 
   makeStyles, 
   Theme, 
   createStyles 
}                   from "@material-ui/core"


const useStyles = makeStyles((theme: Theme) => 
   createStyles({
      container: {
         padding: 10,
         paddingTop: 15,
         paddingBottom: 25,
      },
      textField: {
         paddingBottom: 10,
         height:20,
      },
      searchBarLabel: {
         fontSize: 22,
         marginLeft: 10,
         letterSpacing: 1,
         fontWeight: 'lighter',
         marginTop: -10,
      }
   })
)

export default useStyles
