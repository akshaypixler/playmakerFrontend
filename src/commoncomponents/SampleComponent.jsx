// Component imports
import DrawerNavigationMenu from "./DrawerNavigationMenu";
import NavBar from "../pages/homepage/components/NavBar";

const SampleComponent = ({ isOpen, onOpen, onClose, btnRef }) => {
  return (
    <div>
      <NavBar isOpen={isOpen} onOpen={onOpen} onClose={onClose} btnRef={btnRef} />
      <DrawerNavigationMenu isOpen={isOpen} onOpen={onOpen} onClose={onClose} btnRef={btnRef} />
    </div>
  );
};

export default SampleComponent;