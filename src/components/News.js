import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h3 className='text-center'>NewsMonkey - Top Headlines</h3>
        <div className="row">
          <div className="col-md-4 ">
        <NewsItem title="MyTitle" description="My Description"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="MyTitle" description="My Description"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="MyTitle" description="My Description"/>
        </div>
        
        </div>
      </div>
    )
  }
}

export default News
