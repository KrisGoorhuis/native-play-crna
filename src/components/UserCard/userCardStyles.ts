import { 
   makeStyles, 
   Theme, 
   createStyles 
}                   from "@material-ui/core"

const detailIndent = 40

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      cardContainer: {
         display: 'flex',
         flexDirection: 'column',
         padding: 20,
         borderBottom: '1px solid lightgray',
         position: 'relative',
      },
      picContainer: {
         width: 150,
         display: 'flex',
         alignItems: 'flex-start'
      },
      pic: {
         borderRadius: 999,
         overflow: 'hidden',
         border: '1px solid lightgray',
         width: '100%',
      },
      details: {
         marginLeft: detailIndent,
      },
      cardBody: {
         display: 'flex',
         alignItems: 'flex-start',
         flexDirection: 'row',
         '& li': {
            marginBottom: 5,
         }
      },
      head: {
         display: "flex",
         justifyContent: "space-between",
         width: '100%',
         fontSize: 40,
         fontWeight: 'bolder',
      },
      list: {
         display: 'flex',
         flexDirection: 'column',
         listStyleType: 'none',
      },
      tagList: {
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'flex-start',
         paddingLeft: detailIndent,
      },
      tag: {
         height: 40,
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         borderRadius: 5,
         backgroundColor: 'lightgray',
         marginBottom: 3,
         padding: 5
      },
      expandButton: {
         position: 'absolute',
         top: 10,
         right: 10,
         fontSize: 40,
         height: 40,
      },
      expandText: {
         fontSize: 50,
         color: 'gray',
      },
      gradeList: {
         width: 200,
         marginLeft: detailIndent,
         marginBottom: 10,
      },
      grade: {
         marginLeft: detailIndent,
         display: 'flex',
         justifyContent: 'space-between',
      },
      gradeHalf: {
         width: 70,
      }
  })
)

export default useStyles
