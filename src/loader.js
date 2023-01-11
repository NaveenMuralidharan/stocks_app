import stocks from "./stock-data"

export const priceLoader =  async ({ params })=> {

    const symbol = params.symbol

    function isStock(stock) {
        return stock.symbol === symbol;
    }
    
    console.log(stocks.find(isStock))

    // return stocks[1]

    return stocks.find(isStock)
}