const SingleTour = ({id, image, date, title, desc, country, duration, price}) => {
    console.log(image)
    return(
    <article className="tour-card" id={id}>
    <div className="tour-img-container">
      <img src={image} className="tour-img" alt="" />
      <p className="tour-date">{date}</p>
    </div>
    <div className="tour-info">
      <div className="tour-title">
        <h4>{title}</h4>
      </div>
      <p>
        {desc}
      </p>
      <div className="tour-footer">
        <p>
          <span><i className="fas fa-map"></i></span> {country}
        </p>
        <p>{duration}</p>
        <p>{price}</p>
      </div>
    </div>
  </article>)
}

export default SingleTour