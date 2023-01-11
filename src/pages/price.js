import { useLoaderData } from "react-router-dom";

const Price = (props)=> {

    const stock = useLoaderData();
    
    return (
            <div>
                <h2>Name: { stock.name }</h2>
                <h2>Price: { stock.lastPrice }</h2>
            </div>
        
        )

}

export default Price;