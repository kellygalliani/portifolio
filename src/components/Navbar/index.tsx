import { useState } from "react";
import useMedia from "use-media";
import { userData } from "@/utils/userData";

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
  Language,
} from "./style";

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "@/styles/Buttons";
import { Container, Flex } from "@/styles/Global";
import { useLanguage } from "../../providers/languageContext";

export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}
interface NavLinksProps {
  language: boolean;
}

export const NavBar = (): JSX.Element => {
  const isWide = useMedia({ maxWidth: "991px" });

  document.title = userData.nameUser;

  const [open, setOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const OpenMenu = () => {
    setOpen(!open);
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    toggleLanguage();
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoText>{userData.nameUser}</LogoTipoText>
          </LogoTipo>
          {isWide && (
            <>
              <Button
                type="icon"
                onClick={OpenMenu}
                aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
              >
                {!open ? <FaBars /> : <IoClose />}
              </Button>
            </>
          )}
        </NavbarMobileArea>
        <Flex>
          {isWide ? (
            open && <NavLinks language={language} />
          ) : (
            <>
              <NavLinks language={language} />
            </>
          )}
        </Flex>
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = ({ language }: NavLinksProps): JSX.Element => {
  const { toggleLanguage } = useLanguage();
  const isWide = useMedia({ maxWidth: "991px" });

  const handleToggle = () => {
    toggleLanguage();
  };

  return (
    <NavbarLinks>
      <Button type="btLink" as="a" color="grey4" href={`#home`}>
        {language ? "Início" : "Home"}
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#projects`}>
        {language ? "Projetos" : "Projects"}
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#contact`}>
        {language ? "Contato" : "Contact"}
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#social-media`}>
        {language ? "Mídia Social" : "Social Media"}
      </Button>
      <Language>
        <div
          onClick={handleToggle}
          style={{
            width: "60px",
            height: "30px",
            background: language ? "#f8b200" : "#f8007c",
            borderRadius: "15px",
            position: "relative",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "28px",
              background: "white",
              borderRadius: "50%",
              position: "absolute",
              top: "1px",
              left: language ? "1px" : "30px",
              transition: "left 0.2s",
            }}
          >
            <p style={{ textAlign: "center", lineHeight: "28px" }}>
              {language ? "PT" : "EN"}
            </p>
          </div>
          <p
            style={{
              position: "absolute",
              top: "5px",
              left: language ? "35px" : "5px",
            }}
          >
            {language ? "EN" : "PT"}
          </p>
        </div>
      </Language>
    </NavbarLinks>
  );
};
