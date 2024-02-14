import './Capabilities.css'
import Cards from './Cards/Cards'

const Capabilities = () => {
    return (
        <div class="capabilities">
            <h2 class="capabilities__title">Why <span>TRADE</span>
            <br />
            with XM?
            </h2>
            <hr />
            <p class="capabilities__info">
                We have been providing traders around the world with the same <span>premium experience</span> for over a decade. As an <span>industry-leader</span>, we know what the modern trader needs to be <span>successful</span> in the markets.
            </p>
            {/* <section class="capabilities__cards"> */}
                <Cards />
            {/* </section> */}
        </div>
    )
}

export default Capabilities;