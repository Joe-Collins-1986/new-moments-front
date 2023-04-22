import React from 'react'
import styles from '../../styles/Comment.module.css'
import Avatar from '../../components/Avatar'
import { Media } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Comment = ({profile_id, profile_image, owner, updated_at, content}) => {
  return (
    <div>
        <hr />
        <Media>
            <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} />
            </Link>
            <Media.Body>
                <span className={styles.Owner}>{owner}</span>
                <span className={styles.Date}>{updated_at}</span>
                <p>{content}</p>
            </Media.Body>
        </Media>
    </div>
  )
}

export default Comment