import React from 'react';
import {Link} from "react-router-dom";

function JobMember(props) {
    const teamMemberURl = `/careers/${props.name.split(' ').join('-').toLocaleLowerCase()}?id=${props.id}`;

    return (
        <div className="col-sm-6 col-lg-3">
            <div className="team-mem-item">
                <Link to={`${process.env.PUBLIC_URL + teamMemberURl}`}>
                    <h1 style={{ color: "white", fontFamily: "sans-serif", fontWeight: "normal"}}>{props.name}</h1>
                </Link>
            </div>
        </div>
    );

}

export default JobMember;