import styles from './Profile.module.css';
import { type User } from '../services/user';

interface ProfileProps {
    user: User;
}

function Profile({ user }: ProfileProps) {
    return (
        <div className={styles.card}>
            <div className={styles.profileIcon}>{user.name.split('')[0]}</div>
            <div>
                <p className={styles.name}>{user.name}</p>
                <p className={styles.email}>{user.email}</p>
            </div>
        </div>
    )
}
export default Profile;
