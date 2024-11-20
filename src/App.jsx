import { Container } from "./components/Container";
import { Reviews } from "./containers/Reviews";
import { Preview } from "./containers/Preview";
import { Popup } from "./components/Popup";
import { usePopup } from "./hooks/usePopup";
import { useContext, useEffect, useRef } from "react";
import { PopupContext } from "./context/PopupContext";
import { Chats } from "./containers/Chats";

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
