import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Articles = ({data}) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const itemsPerPage = 10

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset,data])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='flex flex-col gap-2'>
        {currentItems.map((item, index) => {
          return (
            <div className="text-[14px] md:text-base bg-gray-100 border border-[#ceb9bf] rounded-md py-2 px-1" key={index} id={index}>
              <div key={index} id={index} className='flex flex-col gap-5'>
                  <Link to={`/ArticlesDetails/${index}`}>{item.title}</Link>
                  <p>{item.description}</p>
                  <p>{item.author === null ? "Unknown author" : `${item.author}`}</p>
                  <p>Source: {(item.source.name)}</p>
                  <p>{(item.publishedAt).slice(0, 10)}</p>
                </div>
            </div>
          )
        })}
        
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        containerClassName = "list-none flex flex-wrap justify-center items-center gap-3 m-5 text-[12px] md:text-[15px] lg:text-[15px]"
        pageLinkClassName='page-num p-[10px] md:px-[15px] md:py-[8px] lg:px-[15px] lg:py-[8px] cursor-pointer rounded-[3px] font-normal hover:bg-gray-500'
        previousLinkClassName='px-2 py-1 bg-blue-500 rounded-[5px]'
        nextLinkClassName='bg-blue-500 px-2 py-1 bg-blue-500 rounded-[5px]'
        activeLinkClassName='active px-2 py-1 bg-blue-500 rounded-[5px]'
      />
    </>
  );
}

export default Articles
Articles.propTypes = {
  data: PropTypes.array.isRequired
}
