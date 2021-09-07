
import styles                   from './userCardStyles'
import React                    from 'react'
import { UserProfileWithTags }  from '../../model/UserData'
import { 
   Button, 
   TextField 
}                               from '@material-ui/core'
import { updateUserTags }       from '../../actions/userData/userData'
import { useDispatch }          from 'react-redux'


interface UserCardProps {
   userProfile: UserProfileWithTags
}

const UserCard = (props: UserCardProps) => {
   const classes = styles()
   const dispatch = useDispatch()
   const averageScore = props.userProfile.grades.reduce((acc, c) => acc + parseInt(c), 0) / props.userProfile.grades.length

   const [expanded, setExpanded] = React.useState<boolean>(false)
   const [newTagText, setNewTagText] = React.useState<string>("")


   return (
      <div className={classes.cardContainer}>

         <div>
            <Button
               className={classes.expandButton}
               onClick={() => setExpanded(!expanded)}
            >
               <div className={classes.expandText}>{expanded ? "-" : "+"}</div>
            </Button>
         </div>
         
         <div className={classes.cardBody}>

            <div className={classes.picContainer}>
               {/* Suppresses warning for redundant use of "picture" in alt property */}
               {/* eslint-disable-next-line */}
               <img className={classes.pic} src={props.userProfile.pic} alt="User's profile picture"/>
            </div>

            <div className={classes.details}>

               <div className={classes.head}>
                  <div>{`${props.userProfile.firstName.toUpperCase()} ${props.userProfile.lastName.toUpperCase()}`}</div>
               </div>
               <ul className={classes.list}>
                  <li>{`Email: ${props.userProfile.email}`}</li>
                  <li>{`Company: ${props.userProfile.company}`}</li>
                  <li>{`Skill: ${props.userProfile.skill}`}</li>
                  <li>{`Average score: ${averageScore}`}</li>
               </ul>

               {/* Expanded grades */}
               <div className={classes.gradeList}>
                  {
                     expanded &&
                     props.userProfile.grades.map((grade: string, i: number) => {
                        return (
                           <div key={i} className={classes.grade}>
                              <div className={classes.gradeHalf}>{`Test ${i}: `}</div>
                              <div className={classes.gradeHalf}>{grade}%</div>
                           </div>
                        )
                     })
                  }
               </div>

               {/* Tags list */}
               <div className={classes.tagList}>
                  {
                     props.userProfile.tags.map((tag: string, i: number) => {
                        return <div key={i} className={classes.tag}>{tag}</div>
                     })
                  }
                  {
                     !expanded &&
                     <form 
                        onSubmit={(e) => {
                           console.log("e")
                           console.log(e)

                           e.preventDefault() // Prevents page refresh
                           // setTags([...tags, newTagText])
                           dispatch(updateUserTags(props.userProfile.id, [...props.userProfile.tags, newTagText]))
                           setNewTagText("")
                        }}
                     >
                        <TextField 
                           onChange={(e) => setNewTagText(e.target.value)}
                           value={newTagText}
                           label={<div>Add a tag</div>}
                        />
                     </form>
                  }
               </div>

            </div>
         </div>

      </div>
   )
}

export default UserCard