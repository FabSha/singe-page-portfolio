import { animateScroll as scroll } from "react-scroll";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Contact = () => {
  const toTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div
      id="contact"
      style={{ backgroundColor: "plum", width: "100vw", height: "80vh" }}
    >
      <h1>Contact</h1>
      <BsFillArrowUpCircleFill
        onClick={toTop}
        style={{ marginLeft: "30rem", fontSize: "30px", cursor: "pointer" }}
      />
    </div>
  );
};

export default Contact;
