import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0 10%',
            color: 'white'
        }}>
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ fontSize: '5rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.1 }}
            >
                EXPLORE <br />
                <span style={{ color: 'var(--color-accent)' }}>THE UNIVERSE</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                style={{ fontSize: '1.5rem', marginBottom: '2rem', maxWidth: '600px', color: '#ccc' }}
            >
                Journey beyond the stars and discover the mysteries of the cosmos.
                Your adventure begins here.
            </motion.p>

            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, backgroundColor: 'var(--color-accent)', color: '#000' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{
                    padding: '1rem 2.5rem',
                    fontSize: '1.2rem',
                    backgroundColor: 'transparent',
                    border: '2px solid var(--color-accent)',
                    color: 'var(--color-accent)',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    letterSpacing: '1px'
                }}
            >
                START MISSION
            </motion.button>
        </section>
    );
}
