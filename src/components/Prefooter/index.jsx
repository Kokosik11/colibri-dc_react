import "./style.css"

import Bids from "./Bids";;
import Partners from "./Partners";

const Prefooter = ({ setRefScroll }) => {
    return (
        <section className="prefooter">
            <div className="prefooter-content">
                <Bids setRefScroll={ setRefScroll } />
                <Partners />
            </div>
        </section>
    )
}

export default Prefooter;