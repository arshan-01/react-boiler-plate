// src/utils/EndPoints.js
const config = {
    
    BASE_URL: import.meta.env.VITE_BASE_URL,

    endPoints: {
      adminLogin: 'auth/login',
      logout: 'auth/logOut',
      changePassword: 'auth/changePassword',
      myProfile : 'auth/myProfile',
      updateProfile : 'auth/updateProfile',
      sendPasswordResetEmail: 'auth/sendPasswordResetEmail',
    },
  };
  
  export { config };
  