import { ActivityIndicator, ScrollView, Text } from "react-native"
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Container, ItemColumn, ItemContainer, TextInput, CommentTextInput } from "./styled";
import { useAppDispatch, useAppSelector } from "../../redux/types";
import ButtonOutlined from "../../components/ButtonOutlined";
import { TPost } from "../../types";
import { createComment, fetchComments } from "../../redux/thunk/comments.thunk";
import { updatePost } from "../../redux/thunk/posts.thunk";

export const ItemScreen = ({ route }) => {
    const dispatch = useAppDispatch();

    const { id } = route.params;

    const post: TPost = useAppSelector((state) => state.posts.posts.find((post: TPost) => post.id === id));
    const {
        isLoading,
        comments
    } = useAppSelector((state) => state.comments);

    const titleRef = useRef();
    const [editModeEnabled, setEditModeEnabled] = useState(false);
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const [comment, setComment] = useState<string>('');

    useEffect(() => {
        dispatch(fetchComments(id))
    }, [id])

    const toggleEditMode = () => {
        setEditModeEnabled((prev) => {
            setTitle(post.title)
            setBody(post.body)
            setTimeout(() => {
                if (!prev)
                    titleRef?.current?.focus();
            }, 300)
            return !prev;
        })
    }

    const savePost = () => {
        dispatch(updatePost({
            id,
            title,
            body
        }));
        setTimeout(() => {
            setEditModeEnabled(false)
        }, 300)
    }

    const saveComment = () => {
        dispatch(createComment(comment));
        setComment('')
    }

    const isSaveButtonEnabled = useMemo(
        () => title !== post.title || body !== post.body,
        [title, post.title, body, post.body]
    )

    return <ScrollView style={{ flex: 1, padding: 10 }}>
        <Container>
            <ItemContainer>
                <ItemColumn flex={1 / 3} separator={true}>
                    <Text
                        style={{ color: 'grey' }}
                        numberOfLines={1}
                        ellipsizeMode="tail">
                        Title
                    </Text>
                </ItemColumn>
                <ItemColumn flex={2 / 3} separator={false}>
                    {editModeEnabled ? <TextInput
                        ref={titleRef}
                        numberOfLines={1}
                        value={title}
                        onChangeText={setTitle}
                    /> : <Text

                        style={{ color: 'grey' }}
                        numberOfLines={1}
                        ellipsizeMode="tail">
                        {post.title}
                    </Text>}
                </ItemColumn>
            </ItemContainer>
            <ItemContainer style={{ marginBottom: 10 }}>
                <ItemColumn flex={1 / 3} separator={true} >
                    <Text style={{ color: 'grey' }} numberOfLines={1} ellipsizeMode="tail">Body</Text>
                </ItemColumn>
                <ItemColumn flex={2 / 3} separator={false} >
                    {editModeEnabled ? <TextInput
                        multiline
                        numberOfLines={12}
                        value={body}
                        onChangeText={setBody}
                    /> : <Text
                        style={{ color: 'grey' }}
                        numberOfLines={12}
                        ellipsizeMode="tail">
                        {post.body}
                    </Text>}
                </ItemColumn>
            </ItemContainer>
            {!isSaveButtonEnabled
                ? <ButtonOutlined
                    onPress={toggleEditMode}
                    title="Edit post"
                />
                :
                <>
                    <ButtonOutlined
                        onPress={toggleEditMode}
                        title="Cancell"
                    />
                    <ButtonOutlined
                        onPress={savePost}
                        title="Save"
                    />
                </>
            }
            <Text style={{ fontSize: 18, paddingVertical: 10 }}>Comments:</Text>
            {isLoading ? <ActivityIndicator /> :
                comments.map(e => {
                    return <Container key={e.id} style={{ paddingBottom: 10 }}>
                        <ItemContainer>
                            <ItemColumn flex={1 / 10} separator={true} >
                                <Text numberOfLines={1} ellipsizeMode="tail">{e.id}</Text>
                            </ItemColumn>
                            <ItemColumn flex={9 / 10} separator={false} >
                                <Text numberOfLines={1} ellipsizeMode="tail">{e.text}</Text>
                            </ItemColumn>
                        </ItemContainer>
                    </Container>
                })}
            <CommentTextInput
                placeholder="Enter your comment"
                numberOfLines={1}
                value={comment}
                onChangeText={setComment}
            />
            <ButtonOutlined
                disabled={!comment}
                onPress={saveComment}
                title="Add comment"
            />
        </Container>
    </ScrollView>
}