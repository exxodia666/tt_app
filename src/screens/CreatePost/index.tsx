import React, { useRef } from "react";
import { View } from "react-native"
import { useAppDispatch } from "../../redux/types"
import { FC, useEffect, useState } from "react";
import { createPost, fetchPosts } from "../../redux/thunk/posts.thunk";
import { ItemColumn, ItemContainer, TextInput } from "./styled";
import ButtonOutlined from "../../components/ButtonOutlined";

export const CreatePostScreen: FC<{ navigation: any }> = ({ navigation }) => {

    const dispatch = useAppDispatch();

    const titleRef = useRef();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    useEffect(() => { titleRef?.current?.focus() }, [])

    const savePost = () => {
        dispatch(createPost({ title, body }));
        navigation.goBack();
    }
    return <View style={{ flex: 1, padding: 10 }}>
        <ItemContainer>
            <ItemColumn flex={1} separator={false}>
                <TextInput
                    placeholder="Enter title..."
                    ref={titleRef}
                    numberOfLines={1}
                    value={title}
                    onChangeText={setTitle}
                />
            </ItemColumn>
        </ItemContainer>
        <ItemContainer style={{ marginBottom: 10 }}>
            <ItemColumn flex={1} separator={false} >
                <TextInput
                    placeholder="Enter body..."
                    multiline
                    numberOfLines={12}
                    value={body}
                    onChangeText={setBody}
                />
            </ItemColumn>
        </ItemContainer>
        <ButtonOutlined
            disabled={!title || !body}
            onPress={savePost}
            title="Save post"
        />
    </View>
}