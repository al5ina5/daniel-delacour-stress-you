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

    renderHeart = () => {
        if (this.state.show) {
            return <>
                <motion.div
                    drag={true}
                    dragConstraints={{
                        top: -(window.innerHeight / 2),
                        bottom: window.innerHeight / 2,
                        left: -(window.innerWidth / 2),
                        right: window.innerWidth / 2
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
            </>
        }
    }

    componentDidMount() {
        this.setState({
            show: true
        })
    }

    render() {
        return (
            <div ref={this.constraintsRef} className={styles.landing}>
                <Particles className={styles.particles} params={ParticlesConfig} />
                <div className={styles.notice}>[Click Anywhere]</div>
                {this.renderHeart()}
                <div className={styles.footer}>
                    <h1>Stress You by Daniel Delacour</h1>
                    <div className={styles.socials}>
                        <a href="# " target="_blank" rel="noopener noreferrer"><i className="fab fa-apple"></i></a>
                        <a href="# " target="_blank" rel="noopener noreferrer"><i className="fab fa-spotify"></i></a>
                        <a href="# " target="_blank" rel="noopener noreferrer"><i className="fab fa-soundcloud"></i></a>
                        <a href="# " target="_blank" ><i className="fab fa-youtube"></i></a>
                    </div>
                    <div className={styles.credit}>Designed by <a href="https://sebastianalsina.com">Sebastian Alsina</a></div>
                </div>
            </div>
        )
    }
}

export default Index