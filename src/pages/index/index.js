import React, { useRef } from 'react'
import Particles from 'react-particles-js'
import { motion } from 'framer-motion'
import Sound from 'react-sound'
import Typist from 'react-typist'

import styles from './index.module.scss'
import ParticlesConfig from './particles.json'

class Index extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false
        }
    }

    renderHeart = () => {
        if (this.state.show) {
            return <>
                <div className={styles.heart}>
                    <motion.img
                        src="/img/stress-you-heart.png"
                        alt="Stress You Heart"
                        drag={true}
                        dragConstraints={{
                            top: -(window.innerHeight / 2),
                            bottom: window.innerHeight / 2,
                            left: -(window.innerWidth / 2),
                            right: window.innerWidth / 2
                        }}
                        initial={{ rotate: 270, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 10,
                            damping: 500
                        }} />
                </div>
                {/* <img src="/img/stress-you-heart.png" alt="" className={styles.heart} /> */}
                {/* </motion.div> */}
            </>
        }
    }

    componentDidMount() {
        this.setState({
            show: true
        })
    }

    toggleMusic = () => {
        this.setState({
            music: this.state.music ? false : true
        })
    }

    render() {
        return (
            <div ref={this.constraintsRef} className={styles.landing}>
                <Particles className={styles.particles} params={ParticlesConfig} />
                <div className={styles.notice}>[Click Anywhere]</div>
                <i className={`${styles.music} fas ${this.state.loading ? 'fa-circle-notch fa-spin' : this.state.music ? 'fa-volume-up' : 'fa-volume-mute'}`} onClick={this.toggleMusic} />
                {this.renderHeart()}
                <noscript>
                    <div class={styles.heart}>
                        <img src="/img/stress-you-heart.png" alt="" className={styles.heart} />
                    </div>
                </noscript>
                <Sound
                    autoLoad={true}
                    onLoad={() => {
                        this.setState({
                            loading: false
                        })
                    }}
                    onStop={() => {
                        this.setState({
                            music: false
                        })
                    }}
                    onFinishedPlaying={() => {
                        this.setState({
                            music: false
                        })
                        alert('Test')
                    }}
                    url="/audio/stress-you-preview.mp3"
                    playStatus={this.state.music ? Sound.status.PLAYING : Sound.status.STOPPED}
                />
                <div className={styles.footer}>
                    <Typist cursor={{ show: false }}><h1>Stress You by Daniel Delacour.</h1></Typist>
                    <noscript><h1>Stress You by Daniel Delacour.</h1></noscript>
                    <div className={styles.socials}>
                        <a href="# " aria-label="Apple Music" target="_blank" rel="noopener noreferrer"><i className="fab fa-apple"></i></a>
                        <a href="# " aria-label="Spotify" target="_blank" rel="noopener noreferrer"><i className="fab fa-spotify"></i></a>
                        <a href="# " aria-label="SoundCloud" target="_blank" rel="noopener noreferrer"><i className="fab fa-soundcloud"></i></a>
                        <a href="# " aria-label="YouTube" target="_blank" ><i className="fab fa-youtube"></i></a>
                    </div>
                    <div className={styles.credit}>Designed by <a href="https://sebastianalsina.com">Sebastian Alsina</a></div>
                </div>
            </div>
        )
    }
}

export default Index