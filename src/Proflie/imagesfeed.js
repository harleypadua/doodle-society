import React from 'react';
import { Link } from 'react-router-dom'

const NormalImageFeed = ({ imgs, getDoods, user }) => (
    <div>
      <div class="main">
      {imgs.map(img => (
        <div>
        <h6><font color="black">Doodle</font></h6>
        <p align="justify"><font size="3" color="black">{user.name}</font></p>
          <div class="fakeimg" style={{height: 200}}>
            <Link to={{
              pathname: '/doodle',
              url: img.url,
              original_id: img.id,
              getDoods: getDoods
            }}>
              <img className="gallery-img" src={img.url} />
            </Link>
      </div> 
      </div>
          )
        )
      }
      </div>
  </div>
)

export default NormalImageFeed;