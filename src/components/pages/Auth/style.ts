import styled from 'styled-components'
import { blue } from '../../../styles/colors'

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08), 0px 4px 6px rgba(50, 50, 93, 0.1);
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  color: ${blue};
  margin: 0 0 2rem 0;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
`
