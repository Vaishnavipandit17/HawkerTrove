import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      {/* <p>You can search hawkers using Google Maps.</p> */}
      <h1>Recent Bookings</h1>
      <div className="tripcard">
        <TripData image={Trip1} heading="15 May 2023" text="Vegetable Hawker" />

        <TripData
          image={Trip2}
          heading="17 April 2023"
          text="IceCream Hawker"
        />

        <TripData image={Trip3} heading="23 February 2023" text="Junk Hawker" />
      </div>
    </div>
  );
}

export default Trip;
