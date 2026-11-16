// FOOTER - shows at the bottom of every page
function Footer() {
  // JS expression inside JSX: gets the current year automatically
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Naija Bites Kitchen. All rights reserved.</p>
      <p>Built with React JS ❤️</p>
    </footer>
  );
}

export default Footer;
