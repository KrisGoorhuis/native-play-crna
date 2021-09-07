import { baseUrl }         from '../../model/http'
import axios, {
   AxiosError
}                          from 'axios'
import { UserProfile }     from '../../model/DrawingData'
import { StandardThunk }   from '../../model/redux/thunks'
import { 
   setFailedRetrievingUserData, 
   setRetrievingUserData, 
   setNewUserData,
   setUpdatedUserTags
}                          from '../../redux/slices/userData'
import _                   from 'lodash'

export const retrieveUserData = (): StandardThunk => (dispatch) => {
   dispatch(setRetrievingUserData(true))
   dispatch(setFailedRetrievingUserData(false))

   interface UserDataSuccess {
      students: UserProfile[],
   }

   axios.get<UserDataSuccess>(baseUrl + '/assessment/students')
   .then((response)=>{
      dispatch(setNewUserData(response.data.students))
   })
   .catch((error: AxiosError) => {
      // TODO: error handling
      console.log(error)
      dispatch(setFailedRetrievingUserData(true))
   })
   .then(()=>{
      dispatch(setRetrievingUserData(false))
   })
}

 export const updateUserTags = (userId: string, newTags: string[]): StandardThunk => (dispatch, getState) => {
   const newUserData = _.cloneDeep(getState().userData.userData)

   if (newUserData) {
      for (const profileIndex in newUserData) {
         if (newUserData[profileIndex].id === userId) {
            newUserData[profileIndex].tags = newTags
         }
      }
      console.log("newUserData")
      console.log(newUserData)
      dispatch(setUpdatedUserTags(newUserData))
   }
}