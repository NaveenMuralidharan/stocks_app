import { Link } from "react-router-dom";
import stocks from "../stock-data"


const Stocks = (props)=> {

    return (
        <div className="stocks">
            <ul>
            { stocks.map((stock)=>{

                const { name , symbol} = stock;

                return (
                    <li key={symbol}>
                        <Link to = { `/stock/${symbol}` }>
                            <h3>{ name }</h3>
                        </Link>               
                    </li>
                )
            })}
            </ul>
        </div>
    )

}

export default Stocks;