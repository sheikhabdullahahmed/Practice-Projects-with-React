import { createContext, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react';
import { useState } from 'react';

interface CurrentUserContextType {
    username: {};
}


const CurrentUserContext = createContext<CurrentUserContextType | null>(null);


const CoinContextProvider = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
    const [currentUser, setCurrentUser] = useState<CurrentUserContextType>({
        username: {},
      })

    return (
        <CurrentUserContext.Provider value={currentUser}>
            {props.children}
        </CurrentUserContext.Provider>
    );
};

export default CoinContextProvider;
