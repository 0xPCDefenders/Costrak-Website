import React from 'react';
const MemberInfo = ({job}) => {
    const {name,designation,bio} = job;
    return (
        <div className="member-details-top">
            <div className="row">
                <div className="col-md-5">
                </div>

                <div className="col-md-7 ml-auto">
                    <div className="member-desc">
                        <h2>{name}</h2>
                        <h5>{designation}</h5>
                        <p dangerouslySetInnerHTML={{__html: bio}}/>

                        <div className="contact-info mt-25">
                            {/*<p><strong>Address</strong> <span dangerouslySetInnerHTML={{__html: address}}/></p>
                            <p><strong>Phone</strong> {phone}</p>
                            <p><strong>Email</strong> {email}</p>
                            <p><strong>Web</strong> {website}</p>*/}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberInfo;