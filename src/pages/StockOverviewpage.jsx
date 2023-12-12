import AutoComplete from "../components/AutoComplete"
import StockList from "../components/StockList"

export const StockOverviewPage = ()=>{
    return (<>
    <div className="w-50 p-2 rounded mx-auto inputbox">
        <img src="https://img.freepik.com/premium-vector/king-trading-logo-icon-vector-template_10060-450.jpg?w=2000" className="img"/>
    </div>
    <AutoComplete/>
    <StockList/></>)
}