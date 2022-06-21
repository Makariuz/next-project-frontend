import { createContext, useState, useEffect } from "react";
import { client } from "client";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState(null);

  const saveToken = (token) => {
    localStorage.setItem("token", `Bearer ${token}`);
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
  };

  const signup = async (firstName, lastName, email, password) => {
    const response = await client.post("/auth/create-user", {
      firstName,
      lastName,
      email,
      password,
    });
    navigate("/login");
  };

  const login = async (email, password) => {
    try {
      const response = await client.post("/auth/login", {
        email,
        password,
      });
      saveToken(response.data.token);
      setUser(response.data.user);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const getJobs = async () => {
    const response = await client.get(
      `${process.env.REACT_APP_BACKEND_URL}/jobs`
    );
    setJobs(response.data);
  };

  const verify = async () => {
    try {
      const response = await client.get("/auth/verify");
      setUser(response.data.user);
      navigate("/");
    } catch (error) {
      navigate("/landing");
    }
  };

  const logout = () => {
    deleteToken();
    setUser(null);
    navigate("/landing");
  };

  useEffect(() => {
    verify();
    getJobs();
  }, []);

  const value = {
    user,
    signup,
    login,
    logout,
    getJobs,
    jobs,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
