import { Github, Instagram, Mail, Globe, Send } from "lucide-react";
import { Link } from "react-router-dom";
import GojoImg from '../imgs/gojo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo-png">
            <img src={GojoImg} alt="Gojo Profili" width="60" />
          </div>
          <div className="footer-social">
            <a href="https://github.com/asror8471-gif" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://t.me/asror_tme" target="_blank" rel="noopener noreferrer">
              <Send size={20} />
              <span>Telegram</span>
            </a>
            <a href="https://www.instagram.com/asror.pg1111/" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
            <a href="https://contra.com/asror_8tbojnfq/work?r=asror_8tbojnfq" target="_blank" rel="noopener noreferrer">
              <Globe size={20} />
              <span>Contra</span>
            </a>
            <a href="mailto:asror8471@gmail.com">
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Asror Aliqulov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
