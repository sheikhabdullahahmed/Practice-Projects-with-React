import { createContext, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect } from 'react';
import { useState } from 'react';

interface CurrentUserContextType {

    username: {};
}


const CurrentUserContext = createContext<CurrentUserContextType | null>(null);


const CoinContextProvider = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
    const [allcoins, setAllCoins] = useState([])
    const [currency, setCurrency] = useState({
        name : "usd",
        symbol : "$",
    })
    const fetchCoins = async () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': '	CG-AmB9doyHWd3fTQsnNm2J5Z2h'
            }
          };
          
          fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchCoins()

    },[])
    
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
