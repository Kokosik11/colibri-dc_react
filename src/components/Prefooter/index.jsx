import "./style.css"

import Bids from "./Bids";;
import Partners from "./Partners";

const Prefooter = () => {
    return (
        <section className="prefooter">
            <div className="prefooter-content">
                <Bids />
                <Partners />
            </div>
        </section>
    )
}

export default Prefooter;