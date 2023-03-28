import GlobalStyle from "./assets/styles/GlobalStyle";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React } from "react";
import { UserProvider } from "./contexts/UserContext";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
