import React, { useState, useEffect, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContextProvider";
import styles from "./Chats.module.css";
import Loader from "./Loader";

const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "fb540955-d02f-4271-8532-2850e24b602f",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "5f370d0b-18b0-4605-a897-5e32f516834c",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  const logoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };
  if (!user || loading) return <Loader/>;

  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="fb540955-d02f-4271-8532-2850e24b602f"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
