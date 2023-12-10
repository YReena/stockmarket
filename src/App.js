import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StockOverviewPage } from './pages/StockOverviewpage';
import { StockDetailPage } from './pages/StockDetailPage';
import StockList from './components/StockList';
import AutoComplete from './components/AutoComplete';
import { WatchListContextProvider } from './context/watchListContext';

function App() {
  return (
    <div className="App">
      <WatchListContextProvider>
        <AutoComplete />
        <StockList />
          <Routes>
            <Route path="/" element={<StockOverviewPage />} />
            <Route path="/detail/:symbol" element={<StockDetailPage />} />
          </Routes>
      
      </WatchListContextProvider>

    </div>
  );
}

export default App;
