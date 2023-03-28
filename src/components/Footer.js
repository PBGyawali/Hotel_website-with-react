function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    //code for footer section
    <footer>
      <div class="footer-container text-center mt-5 pb-5">
      {/* adding copyright footer with current year automatically generated */}
        <div class="footer-text">
          Privacy Policy | Terms & Conditions |
          © <span id="copyright-year">{currentYear}</span> Hotel Gautam Raj. All rights reserved.
          <br></br>
              {/* adding copyright footer with current year automatically generated */}
          Designed and developed by <a className="text-white text-underline" href="https://www.linkedin.com/in/prakhar-gyawali-60a687137/">Prakhar Gyawali</a>
        </div>
      </div>
    </footer>
  );
}

  export default Footer;