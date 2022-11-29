import React from "react";
import styled from 'styled-components'

const Header = styled.header`
  .banner {
    width: 100%;
    background-color: #555;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`


function ProfileHeader({
    banner
}) {
    return (
        <Header>
            <div className="banner">
                <img src="https://pbs.twimg.com/media/Fcet4qhakAAN1py.jpg" />
            </div>
        </Header>
    )
}

export default ProfileHeader;


