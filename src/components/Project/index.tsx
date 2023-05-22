import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare, FaLeanpub } from "react-icons/fa";
import { userData } from "@/utils/userData";
import { projecsData } from "@/utils/projectsData";

/* interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
} */

type Project = {
  id: number;
  name: string;
  description: string;
  img: string;
  homepage: string;
  documentation: string;
  html_url: string;
  language: string[];
};

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<Project[]>([]);

  useEffect(() => {
    /* const fetchData = async () => {
      const data = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
      );

      const json = await data.json();

      setRepositories(json);

      return json;
    };
    fetchData(); */

    setRepositories([...projecsData].reverse());
  }, []);

  return (
    <>
      {repositories &&
        repositories?.map?.((repository) => (
          <ProjectWrapper key={repository.id}>
            <ProjectTitle
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey4"
            >
              {repository.name}
            </ProjectTitle>

            <ProjectStack>
              <Text type="body2" color="grey2">
                Primary Language:
              </Text>
              {repository.language && repository.language.length > 0 ? (
                repository.language.map((language) => (
                  <ProjectStackTech key={language}>
                    <Text color="grey2" type="body2">
                      {language}
                    </Text>
                  </ProjectStackTech>
                ))
              ) : (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    Primary language not identified
                  </Text>
                </ProjectStackTech>
              )}
            </ProjectStack>

            <Text type="body1" color="grey2">
              {repository.description?.substring(0, 129)}
            </Text>
            <ProjectLinks>
              <ProjectLink target="_blank" href={repository.html_url}>
                <FaGithub /> Github Code
              </ProjectLink>
              {repository.homepage && (
                <ProjectLink target="_blank" href={`${repository.homepage}`}>
                  <FaShare /> See demo
                </ProjectLink>
              )}
              {repository.documentation && (
                <ProjectLink
                  target="_blank"
                  href={`${repository.documentation}`}
                >
                  <FaLeanpub /> Documentation
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectWrapper>
        ))}
    </>
  );
};
