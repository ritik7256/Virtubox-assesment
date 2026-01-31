// axios instance with withCredentials
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  axios from "axios"
function Profile() {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const loadProfile = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/profile",{withCredentials: true});
      setMsg(res.data.message);
      
    } catch (err) {
      alert("Not authenticated");
      navigate("/login");
    }
  };

  const logout = async () => {

    await axios.post("http://localhost:5000/api/auth/logout",{}, { withCredentials: true });
    navigate("/login");
  };

  return (
    <>
      <h2>Profile</h2>
      <button onClick={loadProfile}>Load Profile</button>
      <p>{msg}</p>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default Profile;
