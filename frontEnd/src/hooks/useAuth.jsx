import { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

const client = new Keycloak({
  url: "https://chimerical-zuccutto-84460a.netlify.app/",
  realm: "myrealm",
  clientId: "myclient",
});

const useAuth = () => {
  const isRun = useRef(false);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (isRun.current) {
      return;
    }
    isRun.current = true;

    console.log("Initializing Keycloak...");
    client
      .init({
        onLoad: "login-required",
        checkLoginIframe: false,
      })
      .then((authenticated) => {
        console.log("Keycloak initialized. Authenticated:", authenticated);
        setLogin(authenticated);
      })
      .catch((error) => {
        console.error("Error initializing Keycloak:", error);
      });
  }, []);

  const logout = () => {
    client.logout();
  };

  return { isLogin, logout };
};

export default useAuth;
