import { useState } from "react";
import useMedia from "use-media";
import { userData } from "@/utils/userData";

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
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
  const { language } = useLanguage();

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoText>{userData.nameUser}</LogoTipoText>
          </LogoTipo>
          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        <Flex>
          {isWide ? (
            open && <NavLinks language={language} />
          ) : (
            <NavLinks language={language} />
          )}
        </Flex>
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = ({ language }: NavLinksProps): JSX.Element => {
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
    </NavbarLinks>
  );
};
