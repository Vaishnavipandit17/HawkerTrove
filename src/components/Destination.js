import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import Mountain7 from "../assets/7.jpg";
import Mountain8 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Available hawkers</h1>
      <p>Hawkers give you the opportunity to see a lot, within a time frame</p>

      <DestinationData
        className="first-des"
        heading="Vegetable Hawkers"
        text="You can purchase vegetables or groceries from the wholesale market. Our vegetable hawker will comes to you. You can search hawker and book them. You can find hawker in nearest location. Our hawker can come to the people’s 
        home or people can go to a nearby hawker to buy vegetable whatever they want. People’s can ask the hawker that the item they want is available or not. 
        According to that they can book the hawker."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Junk Hawker"
        text="You can sell your any type of junk by using this website. Our junk hawkers will comes to you. You can search hawker and book them. You can find hawker in nearest location. Our hawker can come to the people’s 
        home or people can go to a nearby hawker to sell your any junk whatever you want to sell. People’s can ask the hawker that the item they are goint to sell is fine or not. 
        According to that you can book the hawker."
        img1={Mountain3}
        img2={Mountain4}
      />

      <DestinationData
        className="first-des"
        heading="Icecream Hawkers"
        text="You can purchase icecreams and shakes and juices by using this website. Our icecream hawker will comes to you. You can search hawker and book them. You can find hawker in nearest location. Our hawker can come to the people’s 
        home or people can go to a nearby hawker to buy whatever icecream or shake they want. People’s can ask the hawker that the item they want is available or not. 
        According to that they can book the hawker."
        img1={Mountain8}
        img2={Mountain7}
      />
    </div>
  );
};

export default Destination;
