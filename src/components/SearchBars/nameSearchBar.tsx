import styles               from './sharedSearchBarStyles'
import { 
   TextField
}                           from '@material-ui/core'


interface SearchBarProps {
   searchTerm         : string
   handleSearchChange : (string: string) => void
}

const NameSearchBar = (props: SearchBarProps) => {
   const classes = styles()

   return (
      <div className={classes.container}>
         <TextField 
            className={classes.textField}
            fullWidth
            label={<div className={classes.searchBarLabel}>Search by name</div>}
            value={props.searchTerm}
            onChange={(e) => props.handleSearchChange(e.target.value)}
         />
      </div>
   )
}

export default NameSearchBar