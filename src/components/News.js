import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category:'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,

  }


  constructor(){
    super();
    this.state = {
      articles:[],
      loading:false,
      page:1
    }
  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=294854925da0498795661fcf91443ddc&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedDate = await data.json();
    this.setState({
       articles:parsedDate.articles,
       totalResults:parsedDate.totalResults,
       loading:false 
    })
  }

  handlePrevClick=async()=>{
let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=294854925da0498795661fcf91443ddc&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
this.setState({loading:true});
let data = await fetch(url);
let parsedDate = await data.json();
this.setState({
   articles:parsedDate.articles,
   page:this.state.page-1,
   loading:false
})
  }

  handleNextClick=async()=>{
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=294854925da0498795661fcf91443ddc&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedDate = await data.json();
    this.setState({
       articles:parsedDate.articles,
       page:this.state.page+1,
       loading:false
    })
  }}
  render() {
    console.log("render")
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:'35px 0px'}}>NewsMonkey - Top Headlines</h1>
       {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return<div className="col-md-4 " key={element.url}>
        <NewsItem title={element.title} description={element.description} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}
        imgUrl={element.urlToImage?element.urlToImage:"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"} newsUrl={element.url} />
        </div>
        // title={element.title?element.title.slice(0,55):""}
          })}
        </div>
        <div className='container d-flex justify-content-between '>
        <button type='button' disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type='button' disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>
    )
  }
}

export default News
