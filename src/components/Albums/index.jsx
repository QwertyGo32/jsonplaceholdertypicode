import {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {StyledImgWrapper, StyledModal, StyledWrapper} from "./styled";
import cross from '../../img/cross.svg';

export const Albums = ({setIsOpen}) => {
        const [albums, setAlbums] = useState([]);
        const selectedUserId = useSelector(state => state.selectedUserId);
        const wrapperRef = useRef(null);

        useEffect(() => {
            async function fetchAlbums() {
                try {
                    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${selectedUserId.selectedUserId}`);
                    const data = await response.json();
                    setAlbums(data);
                } catch (error) {
                    console.error(error);
                }
            }

            if (selectedUserId) {
                fetchAlbums();
            }
        }, [selectedUserId]);

        const handleClick = (e) => {
            if (e.target === wrapperRef.current) {
                setIsOpen(false);
            }
        };

        return (
            <StyledWrapper onClick={(e) => handleClick(e)} ref={wrapperRef}>
                <StyledModal>
                    <StyledImgWrapper onClick={() => setIsOpen(false)}>
                        <img src={cross} alt='lines cross'/>
                    </StyledImgWrapper>
                    <h2>Albums</h2>
                    <ul>
                        {albums?.map(album => (
                            <li key={album.id}>
                                <p>{album.title}</p>
                            </li>
                        ))}
                    </ul>
                </StyledModal>
            </StyledWrapper>
        );
    }
;
