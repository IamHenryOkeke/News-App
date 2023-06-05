import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import ArticlesDetails from './components/ArticlesDetails';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getNewsData } from './features/newsSlice';

const App = () => {
  const dispatch = useDispatch()
  const { feedItems, newsItems, isLoading, error } = useSelector((state => state.news));

  useEffect(()=>{
    dispatch(getNewsData())
  },[])
  
  return (
    <Router>
      <h1 className="text-6xl text-red-800 text-center">Breaking news</h1>
      <Routes>
        <Route path="/" element={<Home data={feedItems} loading={isLoading} error={error} />} />
        <Route path='/ArticlesDetails/:index' element={<ArticlesDetails data={feedItems}/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
