import { useAuth } from "../context/authContext"
import { useNavigate } from "react-router-dom";
export default function Profile() {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout()
        navigate('/')
    }
    return (
        <div>
            <button
                onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}
