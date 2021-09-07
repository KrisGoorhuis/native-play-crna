import {
   useSelector, 
   useDispatch
}                              from "react-redux"
import { retrieveUserData }    from "../actions/userData/userData"
import { State }               from "../redux"


const useLoadActiveListings = () => {
  const retrievingUserData = useSelector((state: State) => state.userData.retrievingUserData)
  const failedRetrievingUserData = useSelector((state: State) => state.userData.failedRetrievingUserData)
  const userData = useSelector((state: State) => state.userData.userData)

  const dispatch = useDispatch()

  if(!userData && !retrievingUserData){
    dispatch(retrieveUserData())
  }


  return {
    retrievingUserData : !userData || retrievingUserData,
    failedRetrievingUserData,
    userData,
  }
}

export default useLoadActiveListings
