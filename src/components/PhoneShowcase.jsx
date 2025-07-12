import phone1 from "../assets/phone1.jpg"; // Asegúrate de que la extensión sea correcta
import phone2 from "../assets/phone2.png";
import phone3 from "../assets/phone3.jpg";

function PhoneShowcase() {
  return (
    <div className="phones">
        <img src={phone2} alt="phone 2" />
        <img src={phone1} alt="phone 1" />
        <img src={phone3} alt="phone 3" />
    </div>
  );
}

export default PhoneShowcase;
