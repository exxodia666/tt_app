import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  padding: 6px;
  border: 1px solid rgba(255, 42, 36, 0.78);
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-color: ${({disabled}) =>
    disabled ? 'transparent' : 'rgba(255, 42, 36, 0.78)'};
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: ${({disabled}) => (disabled ? 'grey' : 'rgba(255, 42, 36, 0.78)')};
`;
