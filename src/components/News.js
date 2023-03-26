import React, {useEffect , useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News=(props)=> {
 
const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(true);
const [page, setPage] = useState(1);
const [totalResults, setTotalResults] = useState(0);
// document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

   const UpdateNews = async()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(20);
    let parsedDate = await data.json();
    props.setProgress(50);

    setArticles(parsedDate.articles);
setLoading(false);
setTotalResults(parsedDate.totalResults);
    
    props.setProgress(100);

  }


  useEffect(() => {
      UpdateNews();
  }, []);
   

  //   handlePrevClick=async()=>{
  // setPage(page-1);
  // UpdateNews();
  //   }

  //   handleNextClick=async()=>{
  // setPage(page+1);
  //   UpdateNews();
  // }

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedDate = await data.json();
    setArticles(articles.concat(parsedDate.articles));
    setTotalResults(parsedDate.totalResults);
  };

    return (<React.Fragment>
        <h1 className='text-center' style={{ margin: '35px 0px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return <div className="col-md-4 " key={element.url}>
                  <NewsItem title={element.title} description={element.description} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name}
                    imgUrl={element.urlToImage} newsUrl={element.url} />
                </div>
                // title={element.title?element.title.slice(0,55):""}
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className='container d-flex justify-content-between '>
        <button type='button' disabled={state.page<=1} className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
        <button type='button' disabled={state.page+1 > Math.ceil(state.totalResults/props.pageSize)} className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div> */}
        </React.Fragment>
    )
  }





News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
};

News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general'
};
export default News
