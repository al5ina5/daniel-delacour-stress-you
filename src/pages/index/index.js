import React from 'react'
import Particles from 'react-particles-js'
import Tilt from 'react-tilt'

import styles from './index.module.scss'
import ParticlesConfig from './particles.json'

class Index extends React.Component {
    state = {

    }

    render() {
        return (
            <Tilt className={styles.landing} options={{ max: 25, perspective: 2000 }}>
                <Particles className={styles.particles} params={ParticlesConfig} />
                <div className={styles.notice}>[Click Anywhere]</div>
                <img src="/img/stress-you-heart.png" alt="" className={styles.heart} />

                <div className={styles.socials}>
                    <a href="# " target="_blank" rel="noopener noreferrer"><i className="fab fa-apple"></i></a>
                    <a href="# " target="_blank" rel="noopener noreferrer"><i className="fab fa-spotify"></i></a>
                    <a href="# " target="_blank" rel="noopener noreferrer"><i className="fab fa-soundcloud"></i></a>
                    <a href="# " target="_blank" ><i className="fab fa-youtube"></i></a>
                </div>
            </Tilt>
        )
    }
}

export default Index