import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container" style={{display: 'flex', justifyContent:'space-between'}}>
        <p></p>
        <p>Copyright &copy; {new Date().getFullYear()} <a href="https://github.com/jasor63">JASOR63</a></p>
      </div>
    </div>
  );
}

export default Footer;
