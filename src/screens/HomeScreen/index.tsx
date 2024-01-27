import React from "react";
import { ActivityIndicator, FlatList } from "react-native"
import { useAppDispatch, useAppSelector } from "../../redux/types"
import { FC, useEffect } from "react";
import { fetchPosts } from "../../redux/thunk/posts.thunk";
import { ListItem } from "./components";
import { ListStyle, LoaderContainer } from "./styled";
import ButtonOutlined from "../../components/ButtonOutlined";
import { Routes } from "../../navigation/stack/main_stack/routes";

export const HomeScreen: FC<{ navigation: any }> = ({ navigation }) => {

    const dispatch = useAppDispatch();

    const { posts, isLoading } = useAppSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    if (isLoading && !posts.length) {
        return <LoaderContainer>
            <ActivityIndicator />
        </LoaderContainer>
    }
    return <>
        <FlatList
            contentContainerStyle={ListStyle}
            renderItem={({ item }) => {
                console.log({ title: item.title, id: item.id });
                return <ListItem
                    id={item.id}
                    title={item.title}
                    onPress={navigation.navigate.bind(null, Routes.post, { title: item.title, id: item.id })}
                />
            }}
            data={posts}
            keyExtractor={(e) => e.id.toString()}
            ListFooterComponent={() => {
                return <ButtonOutlined onPress={() => {
                    navigation.navigate(Routes.create_post)
                }}
                    title="Create new post"
                />
            }}

        />
    </>
}