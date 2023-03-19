import React from "react";

const Clock=({ timer}) => {
    return(
            <section className="container">
                <section className="time">
                    <div className="Clock">
                    <section>
                        <div><p id="shownTime">{timer}</p>
                        <small className="sechead">Seconds</small></div>
                        
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