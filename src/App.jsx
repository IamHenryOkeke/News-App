import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import ArticlesDetails from './components/ArticlesDetails';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getNewsData } from './features/newsSlice';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './components/Modal';

const App = () => {
  const { modalStatus } = useSelector((state) => state.news)
  const dispatch = useDispatch()
  const { feedItems, newsItems, isLoading, error } = useSelector((state => state.news));

  useEffect(()=>{
    dispatch(getNewsData())
  },[])
  
  return (
    <Router>
      {
        modalStatus && <Modal/>
      }
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home data={feedItems} loading={isLoading} error={error} />} />
        <Route path='/ArticlesDetails/:index' element={<ArticlesDetails data={feedItems}/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App
