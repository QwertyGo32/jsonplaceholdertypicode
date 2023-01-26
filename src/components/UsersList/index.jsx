import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from "react-router-dom";
import {setSelectedUserId} from '../../redux/selectedUserIdSlice';
import {fetchUsers} from "../../redux/usersSlice";
import {Albums} from "../Albums";
import {
    StyledBtn,
    StyledBtnsContainer,
    StyledContainer,
    StyledTitle,
    StyledUserContainer,
    StyledUserName,
    StyledWrapper
} from "./styled";

export const UsersList = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const handleOnPostClick = (userId) => {
        dispatch(setSelectedUserId(userId));
    }

    const handleOnAlbumsClick = (userId) => {
        dispatch(setSelectedUserId(userId));
        setModalIsOpen(true);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                dispatch(fetchUsers(data));
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [dispatch]);

    return (
        <StyledWrapper>
            <StyledTitle>Users List</StyledTitle>
            <StyledContainer>
                {users.users?.map(user => (
                    <StyledUserContainer key={user.id}>
                        <StyledUserName>
                            {user.name}
                        </StyledUserName>
                        <StyledBtnsContainer>
                            <Link to={`/posts/${user.id}`}>
                                <StyledBtn onClick={() => handleOnPostClick(user.id)}>
                                    Posts
                                </StyledBtn>
                            </Link>
                            <StyledBtn onClick={() => handleOnAlbumsClick(user.id)}>
                                Albums
                            </StyledBtn>
                        </StyledBtnsContainer>
                    </StyledUserContainer>
                ))}
            </StyledContainer>
            {
                modalIsOpen && <Albums setIsOpen={setModalIsOpen}/>
            }
        </StyledWrapper>
    );
}