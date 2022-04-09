import { createContext, useContext, useState } from "react";

const AuthContext = createContext()
const useAuthContext = () => useContext(AuthContext)
const AuthProvider = ({children}) => {
    const token = JSON.parse(localStorage.getItem("HAB"))
    const [ userProfileData, setUserProfileData] = useState(token?.USER_PROFILE_HAB)
    const [jwtToken, setJwtToken] = useState(token?.JWT_TOKEN_HAB)

    return (
        <AuthContext.Provider value = {{jwtToken, setJwtToken, userProfileData, setUserProfileData}}>
            {children}
        </AuthContext.Provider>
    )
}
export { useAuthContext, AuthProvider}