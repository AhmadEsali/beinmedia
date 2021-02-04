import styled from 'styled-components/macro';
import { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AboutUsExpertiseContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const ExpertiseTitle = styled.h1`
  font-family: 'LoewNextArabicExtraBold';
  font-size: 2.1rem;
  color: white;
  font-weight: 800;
  text-align: right;
`;
export const ExpertisesContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 24px;
`;

export const ExpertisesItem = styled.div`
  font-family: 'LoewNextArabic';
  font-size: 1.4rem;
  color: rgb(var(--blue-light-two));
  height: 34px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 10px 20px 9px;
  border-radius: 5px;
  background-color: rgb(var(--dark-slate-blue-four));
`;
