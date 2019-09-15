import React, { createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {
  state = {
    authenticated: false,
    userAuthenticated: {
      username: "lutfi",
      email: "mlutfiibra@outlook.com"
    }
  };

  render() {
    return (
      <AuthContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
