import getLoggedInUserId from "./geLoggedInUserId"
import isUserLoggedIn from "./isUserLoggedIn"
import isUserManager from "./isUserManager"
import isUserRegular from "./isUserRegular"
import loginUser from "./loginUser"
import logoutUser from "./logoutUser"
import retrieveUser from "./retrieveUser"
import registerUser from "./registerUser"
import retrieveParkings from "./retrieveParkings"
import retrieveParking from "./retrieveParking"
import retrieveReviews from "./retrieveReviews"
import updateUserEmail from "./updateUserEmail"
import updateUserPassword from "./updateUserPassword"
import retrieveParkingsByGeo from "./retrieveParkingsByGeo"
import retrieveSavedParkings from "./retrieveSavedParkings"
import toggleSaveParking from "./toggleSaveParking"
import toggleConfirmParking from "./toggleConfirmParking"

const logic = {
   getLoggedInUserId,
   isUserLoggedIn,
   isUserManager,
   isUserRegular,
   loginUser,
   logoutUser,
   retrieveUser, 
   registerUser,
   retrieveParkings,
   retrieveParking,
   retrieveReviews, 
   updateUserEmail,
   updateUserPassword,
   retrieveParkingsByGeo,
   retrieveSavedParkings, 
   toggleSaveParking,
   toggleConfirmParking
}

export default logic
