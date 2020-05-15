import React, { useRef } from 'react'
import Particles from 'react-particles-js'
import { motion } from 'framer-motion'

import styles from './index.module.scss'
import ParticlesConfig from './particles.json'

class Index extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div ref={this.constraintsRef} className={styles.landing}>
                <Particles className={styles.particles} params={ParticlesConfig} />
                <div className={styles.notice}>[Click Anywhere]</div>
                <motion.div
                    drag={true}
                    dragConstraints={{
                        top: 0,
                        bottom: 100,
                        left: 0,
                        right: 100
                    }}
                    initial={{ rotate: 180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 100
                    }}>
                    <img src="/img/stress-you-heart.png" alt="" className={styles.heart} />
                </motion.div>
                <div className={styles.footer}>
                    <h1>Stress You by Daniel Delacour</h1>
                    <div className={styles.socials}>
                        <a href="# " target="_blank" rel="noopener noreferrer"><i className="fab fa-apple"></i></a>
                        <a href="# " target="_blank" rel="noopener noreferrer"><i className="fab fa-spotify"></i></a>
                        <a href="# " target="_blank" rel="noopener noreferrer"><i className="fab fa-soundcloud"></i></a>
                        <a href="# " target="_blank" ><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index