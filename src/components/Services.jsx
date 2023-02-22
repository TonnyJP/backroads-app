import Titel from "./Title";
import { ServicesList } from "../data";
import SingleServices from "./SingleService";

const Services =() => {
    return(<section className="section services" id="services">
    <Titel title="our " subtitel="services" />
    <div className="section-center services-center">
        {ServicesList.map((service => {
            return(
              <SingleServices id={service.id}  icon={service.icon} title= { service.title } description={service.description}/>
            )
          })
          )
        }
    </div>
  </section>
  )
}

export default Services;