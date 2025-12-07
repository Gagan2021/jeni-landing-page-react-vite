import { motion } from 'framer-motion';

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: '1.5rem 10%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100,
                background: 'rgba(5, 5, 5, 0.5)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
            }}
        >
            <div style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '2px' }}>
                COSMOS
            </div>

            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
                {['MISSION', 'GALLERY', 'GANG'].map((item) => (
                    <li key={item}>
                        <a href="#" style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            letterSpacing: '1px',
                            transition: 'color 0.3s'
                        }}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
}
