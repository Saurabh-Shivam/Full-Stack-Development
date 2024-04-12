const BASE_URL = process.env.REACT_APP_BASE_URL;

/*
 apis is used to connect backend and frontend 

 export const categories = {
  CATEGORIES_API: BASE_URL + "/course/showAllCategories",
}
here "/course/showAllCategories" is url of showAllCategories in backend and we get,post,delete data from that url and used in fronted.

ex :-      export const contactusEndpoint = {
                CONTACT_US_API: BASE_URL + "/reach/contact",
              }                          // this api is used to connect contactUsForm (frontend (component->contactPage)) to ContactUs (backend (controllers->contactUs));
here we are actually doing that (in BACKEND) :- first make  "route" of function that in controllers (router.post("/contact", contactUsController) in route->contact) and then 
make final route of file in index.js in backend :- app.use("/api/v1/reach", contactUsRoute) and const contactUsRoute = require("./routes/Contact");
So our final route is "/api/v1/reach" to reach the file name "contact" in route and then attach the route of function to it like :-"/api/v1/reach/contact"

So base url is :-  http://localhost:4000/api/v1 + "/reach/contact",  is API which is used in frontend with the help of apiConnector;
*/

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/api/v1/auth/sendotp",
  SIGNUP_API: BASE_URL + "/api/v1/auth/signup",
  LOGIN_API: BASE_URL + "/api/v1/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/api/v1/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/api/v1/auth/reset-password",
};

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/api/v1/profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API:
    BASE_URL + "/api/v1/profile/getEnrolledCourses",
  GET_INSTRUCTOR_DATA_API: BASE_URL + "/api/v1/profile/instructorDashboard",
};

// STUDENTS ENDPOINTS
export const studentEndpoints = {
  COURSE_PAYMENT_API: BASE_URL + "/api/v1/payment/capturePayment",
  COURSE_VERIFY_API: BASE_URL + "/api/v1/payment/verifyPayment",
  SEND_PAYMENT_SUCCESS_EMAIL_API:
    BASE_URL + "/api/v1/payment/sendPaymentSuccessEmail",
};

// COURSE ENDPOINTS
export const courseEndpoints = {
  GET_ALL_COURSE_API: BASE_URL + "/api/v1/course/getAllCourses",
  COURSE_DETAILS_API: BASE_URL + "/api/v1/course/getCourseDetails",
  EDIT_COURSE_API: BASE_URL + "/api/v1/course/editCourse",
  COURSE_CATEGORIES_API: BASE_URL + "/api/v1/course/showAllCategories",
  CREATE_COURSE_API: BASE_URL + "/api/v1/course/createCourse",
  CREATE_SECTION_API: BASE_URL + "/api/v1/course/addSection",
  CREATE_SUBSECTION_API: BASE_URL + "/api/v1/course/addSubSection",
  UPDATE_SECTION_API: BASE_URL + "/api/v1/course/updateSection",
  UPDATE_SUBSECTION_API: BASE_URL + "/api/v1course/updateSubSection",
  GET_ALL_INSTRUCTOR_COURSES_API:
    BASE_URL + "/api/v1/course/getInstructorCourses",
  DELETE_SECTION_API: BASE_URL + "/api/v1/course/deleteSection",
  DELETE_SUBSECTION_API: BASE_URL + "/api/v1/course/deleteSubSection",
  DELETE_COURSE_API: BASE_URL + "/api/v1/course/deleteCourse",
  GET_FULL_COURSE_DETAILS_AUTHENTICATED:
    BASE_URL + "/api/v1/course/getFullCourseDetails",
  LECTURE_COMPLETION_API: BASE_URL + "/api/v1/course/updateCourseProgress",
  CREATE_RATING_API: BASE_URL + "/api/v1/course/createRating",
};

// RATINGS AND REVIEWS
export const ratingsEndpoints = {
  REVIEWS_DETAILS_API: BASE_URL + "/api/v1/course/getReviews",
};

// CATAGORIES API
export const categories = {
  CATEGORIES_API: BASE_URL + "/api/v1/course/showAllCategories",
};

// CATALOG PAGE DATA
export const catalogData = {
  CATALOGPAGEDATA_API: BASE_URL + "/api/v1/course/getCategoryPageDetails",
};
// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/api/v1/reach/contact",
};

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/api/v1/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/api/v1/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/api/v1/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/api/v1/profile/deleteProfile",
};
