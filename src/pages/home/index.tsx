// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";
import { useLanguage } from "../../providers/languageContext";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/portifolio`;

  const { language } = useLanguage();

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">
                {language
                  ? `Olá, meu nome é ${userData.nameUser}`
                  : `Hello, my name is ${userData.nameUser}`}
              </Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              {language ? (
                <>
                  Minha paixão é usar o{" "}
                  <Text as="span" type="heading1" color="brand1">
                    código
                  </Text>{" "}
                  para criar{" "}
                  <Text as="span" type="heading1" color="brand1">
                    soluções simples
                  </Text>{" "}
                  para{" "}
                  <Text as="span" type="heading1" color="brand1">
                    problemas complexos
                  </Text>
                </>
              ) : (
                <>
                  My passion is using{" "}
                  <Text as="span" type="heading1" color="brand1">
                    coding
                  </Text>{" "}
                  to create{" "}
                  <Text as="span" type="heading1" color="brand1">
                    simple solutions
                  </Text>{" "}
                  to{" "}
                  <Text as="span" type="heading1" color="brand1">
                    complex problems
                  </Text>
                </>
              )}
            </Text>

            <Text type="body1" color="grey2">
              {language
                ? "Descubra aqui neste ambiente, criado especialmente para você, alguns dos meus projetos e tecnologias"
                : "Discover here in this environment, created especially for you, some of my projects and technologies"}
            </Text>

            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                {language ? "Ver Projetos" : "See Projects"}
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                {language
                  ? "Ver o código do portifólio"
                  : "See my portfolio source code"}
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                {language ? "Meus Projetos" : "My projects"}
              </Text>
              <Text as="p" type="body1" color="grey2">
                {language
                  ? "Fique à vontade para explorar"
                  : "Feel free to explore"}
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
