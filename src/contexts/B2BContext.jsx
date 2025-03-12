import { createContext, useState } from "react";

export const B2BContext = createContext();

const B2BContextProvider = (props) => {
    const [contactVisible, setContactVisible] = useState(false);
    const [visible, setVisible] = useState(false);
    const [navVisible, setNavVisible] = useState(false);
    const [greet, setGreet] = useState('Hellooooo')
    const value = {
        contactVisible, setContactVisible,
        greet, setGreet, visible, setVisible,
        navVisible, setNavVisible
    }
    return (
        <B2BContext.Provider value={value}>
            {props.children}
        </B2BContext.Provider>
    )
}

export default B2BContextProvider