import React from 'react'

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
            style={{ height: '20rem', margin: '5rem auto' }}
          />
          <p className="contact-p">
            I am a frontend web developer, I have built several components of
            projects for small business as a freelancer, looking at a design I
            can convert it into an <strong className="white">HTML&CSS</strong>
            template with pixel perfect precision. I use
            <strong className="white">React</strong> and
            <strong className="white">Bootstrap</strong> quite often, so the
            turn around of my projects is pretty quick, and I always use
            <strong className="white">GIT</strong> to track my progress and
            files, as well to collaborate with other developers in the future.
          </p>
          <hr />
          <p className="contact-p">
            Currently, I am learning an advanced course related to
            <strong className="white">TypeScript</strong> and
            <strong className="white">GatsbyJS</strong>, and I am looking for a
            position where I can progress and challenge my skills.
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <h2 className="font-anton">Contact Me</h2>
          <ul className="list-group" style={{ margin: '15rem auto' }}>
            <li className="list-group-item">
              <p>
                <i className="fas fa-home fa-3x" />
              </p>
              <p>
                <strong>Address</strong>
                <br />
                Burwood, VIC 3125
              </p>
            </li>
            <li className="list-group-item">
              <p>
                <i className="fa fa-phone fa-3x" />
              </p>
              <p>
                <strong>Mobile</strong>
                <br />
                0425 555 0724
              </p>
            </li>
            <li className="list-group-item">
              <p>
                <i className="fa fa-envelope fa-3x" />
              </p>
              <p>
                <strong>Email</strong>
                <br />
                rongyadong19900724@gmail.com
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
