import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,

  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0

    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
  }

  async UpdateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(20);
    
    let parsedDate = await data.json();
    this.props.setProgress(50);

    this.setState({
      articles: parsedDate.articles,
      totalResults: parsedDate.totalResults,
      loading: false
    })
    this.props.setProgress(100);

  }
  async componentDidMount() {
    this.UpdateNews();
  }

  //   handlePrevClick=async()=>{
  // this.setState({page:this.state.page-1});
  // this.UpdateNews();
  //   }

  //   handleNextClick=async()=>{
  //   this.setState({page:this.state.page+1});
  //   this.UpdateNews();
  // }

  fetchMoreData = async () => {

    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedDate = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedDate.articles),
      totalResults: parsedDate.totalResults,
      // loading: false
    })
  };
  render() {
    return (<React.Fragment>
        <h1 className='text-center' style={{ margin: '35px 0px' }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
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
        <button type='button' disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type='button' disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
        </React.Fragment>
    )
  }
}

export default News
