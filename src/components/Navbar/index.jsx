import "./styles.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="nav-options">
          <img src="https://picsum.photos/200/80" alt="" />
          <a href="">Opção</a>
          <a href="">Opção</a>
          <a href="">Opção</a>
          <a href="">Opção</a>
        </div>
        <div className="nav-socials">
          <a className="icon" href=""><WhatsAppIcon/></a>
          <a className="icon" href=""><InstagramIcon/></a>
          <a className="button" href="">Meus Agendamentos</a>
        </div>
      </nav>
    </header>
  );
}
