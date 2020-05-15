import React from 'react'
import Particles from 'react-particles-js'

import styles from './index.module.scss'
import ParticlesConfig from './particles.json'

class Index extends React.Component {
    state = {

    }

    render() {
        return (
            <div class={styles.landing}>
                <Particles className={styles.particles} params={ParticlesConfig} />
                <div className={styles.notice}>[Click Anywhere]</div>
                <img src="/img/stress-you-heart.png" alt="" className={styles.heart} />

                <div className={styles.socials}>
                    <a href="# "><i className="fab fa-apple"></i></a>
                    <a href="# "><i className="fab fa-spotify"></i></a>
                    <a href="# "><i className="fab fa-soundcloud"></i></a>
                </div>
            </div>
        )
    }
}

export default Index