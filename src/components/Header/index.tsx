import { useTheme } from "../../context/useContextTheme";
import { Container, Nav, HighContrast, IconAccessibility } from "./style";
import { BsCircleHalf } from "react-icons/bs";
import { BiFont } from "react-icons/bi";
import { Link } from "react-router-dom";

export function Header() {
  const { toggleFonts } = useTheme();
  const { toggleTheme, size } = useTheme();

  function checkSize(value: number): number {
    return value >= 21 || value <= 11 ? 16 : value;
  }

  function handleIncreaseFont() {
    toggleFonts(checkSize(size + 1.5));
  }

  function handleDecreaseFont() {
    toggleFonts(checkSize(size - 1.5));
  }

  function handleDefaultFont() {
    toggleFonts(checkSize(16));
  }

  return (
    <Container>
      <Nav>
        <Link to="home">
          <h1>Inicio</h1>
        </Link>
        <Link to="genres">
          <h1>Gênero</h1>
        </Link>
        <div style={{ width: size }}></div>

        <section>
          <HighContrast aria-details="Alto contrates" onClick={toggleTheme}>
            <BsCircleHalf size={18} />
          </HighContrast>
          <IconAccessibility onClick={handleIncreaseFont}>
            <BiFont size={18} />+
          </IconAccessibility>
          <IconAccessibility onClick={handleDefaultFont}>
            <BiFont size={18} />
          </IconAccessibility>
          <IconAccessibility onClick={handleDecreaseFont}>
            <BiFont size={18} />-
          </IconAccessibility>
        </section>
      </Nav>
    </Container>
  );
}
