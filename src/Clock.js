import React from "react";

const Clock=({ timer}) => {
    return(
            <section className="container">
                <section className="time">
                    <div className="Clock">
                    <section>
                        <p id="shownTime">{timer}</p>
                        <small className="sechead">Seconds</small>
                    </section>
                    </div>
                </section>
            </section>
      
    )
}
Clock.defaultProps={
    timer: 0,
}
export default Clock