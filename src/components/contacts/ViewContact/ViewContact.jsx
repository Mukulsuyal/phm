import React from "react";
import {Link} from "react-router-dom";

let ViewContact = ()=>{
    return(
        <React.Fragment>
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <p className="h3 text-warning fw-bold">View Contact</p>
                        <p className=" fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam, deserunt quos tenetur totam ipsam. Aperiam dicta, tempore quibusdam mollitia rem pariatur totam, incidunt fuga reprehenderit praesentium doloremque sunt illo?</p>

                    </div>
                </div>

            </section>

            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src="https://tse1.mm.bing.net/th?id=OIP.2eLoZF9Fgrj5OMtB2BjNHgHaHa&pid=Api&P=0&w=164&h=164" alt="" className="contact-img"/>

                        </div>
                        <div className="col-md-8">
                           
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-action">
                                Name :<span className="fw-bold">Mukul</span>
                                </li>

                             <li className="list-group-item list-group-item-action">
                                Mobile :<span className="fw-bold">9999965657</span>
                                </li>

                                 <li className="list-group-item list-group-item-action">
                                    Email :<span className="fw-bold">ms@gmail.com</span>
                                    </li>
                                <li className="list-group-item list-group-item-action">
                                    Company :<span className="fw-bold">AAPNA Infotech</span>
                                    </li> 
                                <li className="list-group-item list-group-item-action">
                                    Title :<span className="fw-bold">Web crt</span>
                                    </li> 
                                <li className="list-group-item list-group-item-action">
                                    Group :<span className="fw-bold">2nd</span>
                                    </li>  
                             </ul>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment>
    )
};
export default ViewContact;