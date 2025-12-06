import { motion } from 'framer-motion';

const features = [
    {
        title: 'Exoplanets',
        description: 'Discover worlds beyond our solar system, potentially habitable and full of life.',
        color: '#ff0055'
    },
    {
        title: 'Nebulas',
        description: 'Witness the birth of stars in massive clouds of gas and dust.',
        color: '#00d4ff'
    },
    {
        title: 'Black Holes',
        description: 'Explore the most mysterious objects in the universe where time stands still.',
        color: '#7700ff'
    }
];

export function FeatureSection() {
    return (
        <section style={{ padding: '5rem 10%', minHeight: '100vh' }}>
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}
            >
                Discover Wonders
            </motion.h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ y: -10 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            padding: '2rem',
                            borderRadius: '20px',
                            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            backgroundColor: feature.color,
                            marginBottom: '1rem',
                            boxShadow: `0 0 20px ${feature.color}`
                        }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h3>
                        <p style={{ color: '#ccc', lineHeight: 1.6 }}>{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
