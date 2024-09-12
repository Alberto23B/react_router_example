import {createContext, useContext, useReducer} from "react"

const initialState = { auth : false };

const authContext = createContext(initialState);

export function reducer(state, action) {
    switch (action.type) {
        case "login":
            return {auth : true};
        case "logout":
            return {auth : false};
        default:
            throw new Error();
    }
}

export function AuthProvider({ children }) {
    const [authed, dispatch] = useReducer(reducer, initialState);
    return <authContext.Provider value={[authed, dispatch]}>{children}</authContext.Provider>
}


//AuthConsumer serve per fare in modo di utilizzare
//useContext(authContext) senza dover importarle in ogni file
export default function AuthConsumer() {
    return useContext(authContext)
}