import React from 'react'

function Home() {
  return (
    <div className='home'>
        <div className='hero'>
            <h1>Largest <br /> Crypto Marketplace</h1>
            <p>Welcome to the world's largest cryptocurrency 
               market. Sign up to explore more about cryptos. 
                 </p>
                 <form >
                    <input type="text" placeholder='Search crypto ' />
                    <button type='submit'>Seacrh</button>
                 </form>
        </div>
        <div className='crpto-table'>
        <div className='table-layout'>
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p style={{textAlign:"center"}}>24H Change</p>
            <p  className='market-cap'>Market Cap</p>

        </div>

        </div>

    </div>
  )
}

export default Home