import './Register.css';
import { IoLocationOutline } from "react-icons/io5";
import { LuClock2 } from "react-icons/lu";
import { BsCalendar2Date } from "react-icons/bs";

const Register = () => {
    return (
        <div class="register">
            <section class="register__container">
                <div class="register__title">- Register Here -</div>
                <p class="register__cto">Join us to celebrate our biggest night of the year.</p>
                <hr />
              <div class = "items_container">
                <div class="register__item">
                    <BsCalendar2Date style={{ width: '23px', height: '30px' }} />
                    <p class="register__item_day">05 November 2022</p>
                    <hr />
                </div>
                <div class="register__item time">
                    <LuClock2 style={{ width: '23px', height: '30px' }} />
                    <p class="register__item_time">16:00 - 23:00</p>
                    <hr />
                </div>
                <div class="register__item">
                    <IoLocationOutline style={{ width: '23px', height: '30px' }} />
                    <p class="register__item_place">CENTARA GRAND & BANGKOK <br />CONVENTION CENTRE, BANGKOK</p>
                </div>
            </div>
            <hr />
            </section>
        </div>
    );
}

export default Register;
