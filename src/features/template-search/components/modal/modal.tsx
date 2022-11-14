import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Template } from '../../contentScripts/setTemplateSearch';
import { setFavoriteTemplateListToChromeStorage } from '../../hooks/setFavoriteTemplateListToChromeStorage';
import { TemplateList } from './templateList';
import { Title } from './title';

const Background = styled.div`
  position: absolute;
  background: black;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  z-index: 10;
  top: 0;
  left: 0;
`;

const ModalWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  background: white;
  opacity: 1;
  z-index: 100;
  position: absolute;
  left: 25%;
  width: 50%;
  top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px;
`;

type Props = {
  templates: Template[];
  toggleModal: (array: Template[]) => void;
};

export const Modal: React.FC<Props> = (props: Props) => {
  const [templates, setTemplates] = useState(props.templates);
  const updateId = (id: string) => {
    const index = templates.findIndex((t) => t.id === id);

    if (templates[index]) {
      const updated = {
        ...templates[index],
        isFavorite: !templates[index].isFavorite,
      };
      const updatedTemplates = [...templates];
      updatedTemplates[index] = updated;
      setTemplates(updatedTemplates);
    }
  };

  useEffect(() => {
    setFavoriteTemplateListToChromeStorage({ids: templates.filter(t => t.isFavorite).map(t => t.id)});
  }, [templates]);

  return (
    <ModalWrapper>
      <Background
        onClick={() => {
          props.toggleModal([]);
        }}
      ></Background>
      <Wrapper>
        <Title toggleModal={props.toggleModal}></Title>
        <TemplateList
          templates={templates}
          dispatchTemplateId={updateId}
        ></TemplateList>
      </Wrapper>
    </ModalWrapper>
  );
};
