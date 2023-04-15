import React, { useEffect,useState}  from "react";
import adeebPic3 from '../images/adeebPic3.jpg'
import aboutPic from'../images/aboutPic.png';
import { useNavigate} from "react-router-dom";
const About = () => {

  const navigate=useNavigate();
  const [userData,setUserData]=useState({});
  const callAboutPage=async ()=>{
try {
  const res = await fetch('/about',{
    method:"GET",
    headers:{
      Accept:'application/json',
      "Content-Type":"application/json"
    },
    credentials:'include'
  })

const data =await res.json();
console.log(data);
setUserData(data);
if(!res.status===200){
  const error=new Error(res.error);
  throw error;
}


} catch (err) {
  console.log(err)
  navigate('/login',{replace:true})
  
}
  }

  useEffect(()=>{
callAboutPage();
  })

  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
              <img src={userData.name === 'Mohammed Adeeb' ? adeebPic3 :aboutPic}  alt="profilePhoto" />

              </div>
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKINGS:<span>1/10</span>
                </p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false">
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                value="Edit Profile"
                name="btnAddMore"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINK</p>
                <a href="https://github.com/Mohammed-Adeeb" target="_adeeb">
                  Github Profile
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/in/mohammed-adeeb-a59911215/"
                  target="_adeeb"
                >
                  Linkedln Profile
                </a>
                <br />
                <a href="https://www.linkedin.com/in/mohammed-adeeb-a59911215/" target="_adeeb">
                  Instagram profile
                </a>
                <br />
              </div>
            </div>
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p>User ID</p>
                    </div>
                    <div className="col-md-6">
                      <p>1234567890</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p>Name</p>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p>Email</p>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p>Phone</p>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p>Profession</p>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.work}r</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show "
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <p> Experience</p>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p> Hourly Rate</p>
                    </div>
                    <div className="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p> Total Projects</p>
                    </div>
                    <div className="col-md-6">
                      <p>3-personal</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p> English Level</p>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p> Availability</p>
                    </div>
                    <div className="col-md-6">
                      <p>6 Months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
