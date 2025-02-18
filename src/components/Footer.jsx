import '../styles/main.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p>
          © {currentYear} Fadi Chehadi. Made with <span className="heart">❤️</span>
        </p>
      </div>
    </footer>
  );
}