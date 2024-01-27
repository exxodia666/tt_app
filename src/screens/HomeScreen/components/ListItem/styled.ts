import styled from 'styled-components/native';

export const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  border-width: 1px;
  border-color: rgba(100, 100, 100, 0.3);
  margin-bottom: 10px;
`;

export const ItemColumn = styled.View<{
  separator: Boolean | undefined;
  flex: number;
}>`
  flex: ${({flex}) => flex};
  justify-content: flex-start;
  flex-direction: row;
  padding: 5px 0px;
  padding-left: 5px;
  border-right-width: ${({separator}) => (separator ? 1 : 0)}px;
  border-color: rgba(100, 100, 100, 0.3);
`;
