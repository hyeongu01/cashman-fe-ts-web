import styles from './Profile.module.css';
import {getMe, type User} from '../services/user';
import { useEffect, useState } from 'react';

interface ProfileProps {
    user: User;
}

function Profile({user}: ProfileProps) {
    return (
        <div className={styles.card}>
            <div className={styles.profileIcon}>{user.id}</div>
            <div>
                <p className={styles.name}>{user.name}</p>
                <p className={styles.email}>cdy5212@gmail.com</p>
            </div>
        </div>
    )
}
export default Profile;
