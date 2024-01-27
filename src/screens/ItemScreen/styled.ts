import styled from 'styled-components/native';

export const ItemContainer = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: rgba(100, 100, 100, 0.3);
  border-right-width: 1px;
  border-left-width: 1px;
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

export const Container = styled.View`
  border-color: rgba(100, 100, 100, 0.3);
  border-top-width: 1px;
`;

export const CommentTextInput = styled.TextInput`
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
`;

export const TextInput = styled.TextInput`
  height: 100%;
  width: 100%;
  margin-top: 0px;
  padding-top: 0px;
  background-color: white;
`;
