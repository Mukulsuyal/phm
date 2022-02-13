import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { ContactService } from "../../../services/ContactService";

let ContactList = ()=>{


    return(
        <React.Fragment>

            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3 fw bold">Contact Manager
                                    <Link to = {'/contacts/add'} className="btn btn-primary ms-2">New
                                        <i className="fa fa-plus-circle ms-2"/>
                                    </Link>
                                </p>

                                <p className="fst-italic">A Contact manager is a software program that enables user to easily store and find contact information,such as names,address,and telephone numbers!</p>               
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form className="row">
                            <div className="col">
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Search Names"/>
                            </div>
                        </div>

                            <div className="col">
                            <div className="mb-2">
                            <input type="Submit" className="btn btn-outline-dark" value="Search"/>
                            </div>
                            </div>  
                    
                        </form>
                    </div>
                </div>
            </div>
        </div> 

            </section>


            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center d-flex justify-content-arround">

                                    <div className="col-md-4">
                                        <img src = "https://tse4.mm.bing.net/th?id=OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH&pid=Api&P=0&w=174&h=167" alt="" className=" contact-img"/>

                                    </div>
                                    <div className="col-md-7">
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
                                        </ul>

                                    </div>
                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                        <Link to={`/contacts/view/:contactId`} className="btn btn-warning my-1">
                                            <i className="fa fa-eye"/>
                                        </Link>

                                        <Link to={`/contacts/edit/:contactId`} className="btn btn-primary my-1">
                                            <i className="fa fa-pen"/>
                                        </Link>

                                        <button  className="btn btn-danger my-1">
                                            <i className="fa fa-trash"/>
                                        </button>

                                    </div>

                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    
                        <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center d-flex justify-content-arround">

                                    <div className="col-md-4">
                                        <img src = "https://tse4.mm.bing.net/th?id=OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH&pid=Api&P=0&w=174&h=167" alt="" className=" contact-img"/>

                                    </div>
                                    <div className="col-md-7">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                                Name :<span className="fw-bold">Kamal</span>
                                                </li>

                                                <li className="list-group-item list-group-item-action">
                                                Mobile :<span className="fw-bold">9998865657</span>
                                                </li>

                                                 <li className="list-group-item list-group-item-action">
                                                Email :<span className="fw-bold">ks@gmail.com</span>
                                                </li>    
                                        </ul>

                                    </div>
                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                        <Link to={`/contacts/view/:contactId`} className="btn btn-warning my-1">
                                            <i className="fa fa-eye"/>
                                        </Link>

                                        <Link to={`/contacts/edit/:contactId`} className="btn btn-primary my-1">
                                            <i className="fa fa-pen"/>
                                        </Link>

                                        <button  className="btn btn-danger my-1">
                                            <i className="fa fa-trash"/>
                                        </button>

                                    </div>

                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                                           

                    </div>
                </div>

            </section>
          
        </React.Fragment>
    )
};

export default ContactList;