import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <h2 className="font-anton">Yadong Rong</h2>

                    <img
                        src="https://avatars1.githubusercontent.com/u/35794495?s=460&v=4"
                        alt="my avatar"
                        className="avatar-img"
                        style={{height: '20rem', margin: '5rem auto'}}
                    />
                    <p className="contact-p">
                        I have 10 months of experience working in web development. Currently, I work as EMS Brüel & Kjær
                        frontend developer, adding new features and maintaining projects for our clients.
                      <hr />
                      <p>Competencies: <strong className="white">HTML, CSS, JavaScript, React, Node</strong></p>

                    </p>
                </div>
                <div className="col-12 col-lg-6">
                    <h2 className="font-anton">Contact Me</h2>
                    <ul className="list-group" style={{margin: '15rem auto'}}>
                        <li className="list-group-item">
                            <p>
                                <i className="fas fa-home fa-3x"/>
                            </p>
                            <p>
                                <strong>Address</strong>
                                <br/>
                                Burwood, VIC 3125
                            </p>
                        </li>
                        <li className="list-group-item">
                            <p>
                                <i className="fa fa-phone fa-3x"/>
                            </p>
                            <p>
                                <strong>Mobile</strong>
                                <br/>
                                0425 555 0724
                            </p>
                        </li>
                        <li className="list-group-item">
                            <p>
                                <i className="fa fa-envelope fa-3x"/>
                            </p>
                            <p>
                                <strong>Email</strong>
                                <br/>
                                rongyadong@yahoo.com
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
