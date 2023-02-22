import Titel from "./Title";
import { ToursList } from "../data"
import SingleTour from "./SingleTour";

const Tours = () => {
    return(<section className="section" id="tours">
    <Titel title="featured " subtitel={"tours"} />
    <div className="section-center featured-center">
        {ToursList.map((tour) => {
            //{ id, image, date, title, desc, country, duration, price } = tour;
            return (
                <SingleTour id={tour.id} image={tour.image} date={tour.date} title={tour.title} desc= {tour.desc} 
                country={tour.country} duration={tour.duration} price={tour.price} />
            )
        })}
    </div>
  </section>)
}

export default Tours;