import React, { FC } from "react";
import { ItemColumn, ItemContainer } from "./styled";
import { Text, TouchableOpacity } from "react-native";
import { Icons } from "../../../../assets";

export const ListItem: FC<{
    id: number,
    title: string,
    onPress: () => void,
}> = ({ id, onPress, title }) => {
    return <ItemContainer onPress={onPress} key={id}>
        <ItemColumn flex={1 / 10} separator={true} >
            <Text numberOfLines={1} ellipsizeMode="tail">{id}</Text>
        </ItemColumn>
        <ItemColumn flex={9 / 10} separator={false}>
            <Text numberOfLines={1} ellipsizeMode="tail">{title}</Text>
        </ItemColumn>
    </ItemContainer>

}