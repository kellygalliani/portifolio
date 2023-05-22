import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import {
  ContactSection,
  ContactSectionContent,
  ContactSectionText,
  ContactsCards,
  ContactCard,
  ContactCardImage,
  ContactCardContent,
} from "./style";

import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { userData } from "@/utils/userData";
import { useLanguage } from "../../providers/languageContext";

export const Contacts = () => {
  const ref = useRef(null);

  const linkedInUrl = `https://www.linkedin.com/in/${userData.linkedinUser}`;

  const { scrollYProgress } = useViewportScroll();
  const { language } = useLanguage();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);

  return (
    <ContactSection id="contact">
      <Container>
        <ContactSectionContent ref={ref}>
          <motion.div style={{ scale }}>
            <ContactSectionText>
              <Text type="heading2" color="grey4">
                {language ? "Vamos conversar e " : "Let's talk and "}
                <Text as="span" type="heading2" color="brand1">
                  {language
                    ? "desenvolver soluções para sua empresa!"
                    : "develop solutions for your company!"}
                </Text>
              </Text>
            </ContactSectionText>
          </motion.div>
          <ContactsCards>
            <ContactCard>
              <ContactCardImage className="wpp">
                <FaWhatsapp color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  {language ? "Meu Whatsapp" : "My Whatsapp"}
                </Text>
                <Text color="grey2" type="body2">
                  {language
                    ? "Estou disponível para uma chamada de voz, vamos conversar sobre criatividade juntos?"
                    : "I'm available for a voice chat, let's talk about creativity together?"}
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=+55+${
                    userData.whatsappNumber
                  }&text=${
                    language
                      ? "Olá, venho por meio do seu portfólio na internet, gostaria de conhecer melhor seus serviços"
                      : "Hello, I come through your portfolio on the internet, I would like to know more about your services"
                  }`}
                >
                  {language ? "Falar agora" : "Talk Now"}
                </Text>
              </ContactCardContent>
            </ContactCard>

            <ContactCard>
              <ContactCardImage className="email">
                <FaEnvelopeOpen color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  {language ? "Meu email" : "My email"}
                </Text>
                <Text color="grey2" type="body2">
                  {language
                    ? "Me mande um email com feedbacks, sugestões e ideias"
                    : "Send me an email reporting feedbacks, suggestions and ideas"}
                </Text>

                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`mailto=${userData.emailUser}`}
                  onClick={() =>
                    (window.location.href = `mailto:${userData.emailUser}`)
                  }
                >
                  {language ? "Enviar um email" : "Send me an email"}
                </Text>
              </ContactCardContent>
            </ContactCard>
            <ContactCard>
              <ContactCardImage className="linkedin">
                <FaLinkedin color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  {language ? "Meu LinkedIn" : "My LinkedIn"}
                </Text>
                <Text color="grey2" type="body2">
                  {language
                    ? "Fique de olho nas atualizações de projetos meus através dessa rede de Network"
                    : "We can create more constant interactions as well as a sharing network."}
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={linkedInUrl}
                >
                  {language ? "Ir para o LinkedIn agora" : "Go to LinkedIn now"}
                </Text>
              </ContactCardContent>
            </ContactCard>
          </ContactsCards>
        </ContactSectionContent>
      </Container>
    </ContactSection>
  );
};
