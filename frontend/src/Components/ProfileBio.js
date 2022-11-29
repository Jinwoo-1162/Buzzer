import React from "react";
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
  position: relative;

  .top {
    display: flex;
    justify-content: space-between;

    .image {
        margin: 0;
        padding: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        border: 4px solid black;
        background-color: #444;

      img {
        width: 50px;
        height: 50px;
        object-fit: center;
        border-radius: 50%;
      }
    }
  }

  .details {
    color: #888;
    margin-top: 20px;

    .user {
      &__name {
        color: black;
        font-weight: bold;
      }

      &__id {
        margin-top: 2px;
        font-size: 15px;
      }

      &__bio {
        color: black;
        margin-top: 10px;
        a {
          color:black;
          text-decoration: none;
        }
      }

      &__follows {
        font-size: 15px;
        display: flex;
        margin-top: 15px;

        b {
          color: black;
        }

        &__followers {
          margin-left: 20px;
        }
      }

      &__followed-by {
        font-size: 13px;
        margin-top: 15px;
      }
    }
  }
`

function ProfileHeader({
}) {
    return (
        <Container>
            <div className="top">
                <div className="image">
                    <img src="https://yellowjackedup.com/wp-content/uploads/getty-images/2017/07/1190021957.jpeg" />
                </div>
            </div>
            <div className="detail s">
                <div className="displayname">Buzz</div>
                <div className="username">@gtbuzz</div>
                <div className="bio">Hi! I'm Buzz, the official mascot of Georgia Tech!</div>
                <div className="user__follows">
                    <span className="following">
                        <b>123</b> Following
                    </span>
                    <span className="followers">
                        <b> 321</b> Followers
                    </span>
                </div>
            </div>
        </Container>
    );
}

export default ProfileHeader;


