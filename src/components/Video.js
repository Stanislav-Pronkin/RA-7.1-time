import React from "react";
import DateTime from "./DateTime";
import withDateTime from "./HOC";

const DateTimeUpg = withDateTime(DateTime);

export default function Video(props) {
    
    return (
        <div className="video">
            <iframe src={props.url} title="iframe" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimeUpg date={props.date} />
        </div>
    )
}