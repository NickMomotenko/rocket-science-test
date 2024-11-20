import { useContext, useEffect, useRef } from "react";

import { Container } from "./components/Container";
import { Popup } from "./components/Popup";

import { Reviews } from "./containers/Reviews";
import { Preview } from "./containers/Preview";
import { Chats } from "./containers/Chats";

import { PopupContext } from "./context/PopupContext";

function App() {
  const popup = useContext(PopupContext);

  const appRef = useRef();

  useEffect(() => {
    if (popup.isOpen) {
      if (appRef.current) appRef.current.style.overflow = "hidden";
    } else {
      if (appRef.current) appRef.current.style.overflow = "auto";
    }
  }, [popup.isOpen]);

  return (
    <div className="app" ref={appRef}>
      <Container>
        <Preview />
        <Reviews />
        <Chats />
      </Container>
      {popup.isOpen && <Popup active={popup.isOpen} />}
    </div>
  );
}

export default App;
