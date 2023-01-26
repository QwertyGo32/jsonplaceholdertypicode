import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useLocation} from "react-router-dom";
import {StyledBackBtn, StyledPostTitle, StyledTitle, StyledWrapper} from "./styled";

export const Posts = () => {
    const location = useLocation().pathname.replace('/posts/', '');
    const selectedUserId = useSelector(state => state.selectedUserId) || location;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId.selectedUserId || selectedUserId}`);
                const data = await response.json();
                setPosts(data)
            } catch (error) {
                console.error(error);
            }
        }

        fetchPosts();
    }, [selectedUserId]);

    return (
        <StyledWrapper>
            <StyledBackBtn to={`/`}>
                <button>
                    Back
                </button>
            </StyledBackBtn>
            <StyledTitle>
                Posts
            </StyledTitle>
            {
                posts.length ? (
                    <ul>
                        {posts.map(post => (
                            <li key={post.id}>
                                <StyledPostTitle>{post.title}</StyledPostTitle>
                                <p>{post.body}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h3>
                        no post found
                    </h3>
                )
            }

        </StyledWrapper>
    );
}
