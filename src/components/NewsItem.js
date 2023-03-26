import React from 'react'

const NewsItem =(props)=>{
    let { title, description, imgUrl, newsUrl, author, date,source } = props
    return (
      <div className='py-3'>
        <div className="card " >
          <div className=" badge rounded-pill bg-danger" 
            style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
              {source}

              </div>

          <img src={imgUrl?imgUrl:'https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg'} 
          className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"> {description}  
            <span>
              <span className="visually-hidden">unread messages</span>
            </span></p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }

export default NewsItem
