import React, {useState}  from 'react'
import axios from 'axios'

import * as Fa from "react-icons/bs";

function ProfileCard(props) {
  const {data} = props
  const [followers, setFollowers] = useState([])

  console.log(data)

  const handleFollowing = () => {
    axios.get(`https://api.github.com/users/${data.login}/followers`)
      .then(res => setFollowers(res.data))
      .catch(err => console.log(err))

    const followerTabEl = document.querySelector('.followersTabs')
    followerTabEl.classList.toggle('toggler')
  }



  return (
    <div className="profileCard">

      <header className="profileHeader">
        <h2>{data.login}</h2>
      </header>

      <div className="profileContent">

        <div className="profileImage">
          <img src={data.avatar_url} alt={data.login} />
        </div>

        <div className="profileContentData">
          <p>{data.bio}</p>

          <div className="profileFollowers">

            <div className="followers follows">
              <Fa.BsFillPeopleFill className="logos followerLogo" onClick={handleFollowing}/>
              <p>Followers: {data.followers}</p>
              <div className="followersTabs">
                <ul>
                  {
                    followers.map(follower => {
                      return <li>{follower.login}</li>
                    })
                  }
                </ul>
              </div>
            </div>

            <div className="following follows">
              <Fa.BsFillPersonFill className="logos followingLogo"/>
              <p>Following: {data.following}</p>
            </div>

          </div>

        </div>


      </div>

    </div>
  )
}

export default ProfileCard
