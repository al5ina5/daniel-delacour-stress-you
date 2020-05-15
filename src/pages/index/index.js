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
                <img src="/img/stress-you-heart.png" alt="" className={styles.heart} />
            </div>
        )
    }
}

export default Index