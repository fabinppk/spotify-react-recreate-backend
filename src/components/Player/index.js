import React from 'react';
import Slider from 'rc-slider';

import { Container, Current, Volume, Progress, Controls, Time, ProgressSlider } from './styles';
import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
// import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = () => (
    <Container>
        <Current>
            <img
                src="https://upload.wikimedia.org/wikipedia/pt/7/72/Grhhhrhry.jpg"
                alt="Avenged Sevenfold"
            />
            <div>
                <span>Afterlife</span>
                <small>Avenged Sevenfold</small>
            </div>
        </Current>
        <Progress>
            <Controls>
                <button type="button">
                    <img src={ShuffleIcon} alt="Shuffle" />
                </button>
                <button type="button">
                    <img src={BackwardIcon} alt="Backward" />
                </button>
                <button type="button">
                    <img src={PlayIcon} alt="Play" />
                </button>
                <button type="button">
                    <img src={ForwardIcon} alt="Forward" />
                </button>
                <button type="button">
                    <img src={RepeatIcon} alt="Repeat" />
                </button>
            </Controls>
            <Time>
                <span>1:30</span>
                <ProgressSlider>
                    <Slider
                        railStyle={{ background: '#404040', borderRadius: 10 }}
                        trackStyle={{ background: '#1ed760' }}
                        handleStyle={{ border: 0 }}
                    />
                </ProgressSlider>
                <span>4:12</span>
            </Time>
        </Progress>
        <Volume>
            <img src={VolumeIcon} alt="Volume" />
            <Slider
                railStyle={{ background: '#404040', boderRadius: 10 }}
                trackStyle={{ background: 'white' }}
                handleStyle={{ display: 'none' }}
                value={100}
            />
        </Volume>
    </Container>
);

export default Player;
