import React from 'react';

import { Container, NewPaylist, Nav } from './styles';
import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
    <Container>
        <div>
            <Nav main>
                <li>
                    <a href="">Navegar</a>
                </li>
                <li>
                    <a href="">Rádio</a>
                </li>
            </Nav>

            <Nav>
                <li>
                    <span>Sua Biblioteca</span>
                </li>
                <li>
                    <a href="">Seu Daily Mix</a>
                </li>
                <li>
                    <a href="">Tocados Recentemente</a>
                </li>
                <li>
                    <a href="">Músicas</a>
                </li>
                <li>
                    <a href="">Álbuns</a>
                </li>
                <li>
                    <a href="">Artistas</a>
                </li>
                <li>
                    <a href="">Estações</a>
                </li>
                <li>
                    <a href="">Arquivos Locais</a>
                </li>
                <li>
                    <a href="">Vídeos</a>
                </li>
                <li>
                    <a href="">Podcasts</a>
                </li>
            </Nav>

            <Nav>
                <li>
                    <span>Playlists</span>
                </li>
                <li>
                    <a href="">Melhores do rock</a>
                </li>
            </Nav>
        </div>
        <NewPaylist>
            <img src={AddPlaylistIcon} alt="Add Playlist" />
            Nova Playlist
        </NewPaylist>
    </Container>
);

export default Sidebar;
