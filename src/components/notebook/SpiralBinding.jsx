import { motion } from 'framer-motion'

function SpiralBinding() {
  const ringCount = 28

  return (
    <div
      className="fixed top-0 left-0 h-full z-50 pointer-events-none"
      style={{ width: '44px' }}
    >
      {/* Binding strip background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, #d4cfc8 0%, #e8e4de 40%, #f0ede6 100%)',
          borderRight: '2px solid #c0bbb4'
        }}
      />

      {/* Rings */}
      <div className="absolute inset-0 flex flex-col justify-around items-center py-6">
        {Array.from({ length: ringCount }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: i * 0.04,
              duration: 0.4,
              type: 'spring',
              stiffness: 200,
              damping: 15
            }}
            style={{
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #b0b0b0 0%, #e8e8e8 40%, #888 60%, #c0c0c0 100%)',
              boxShadow: '2px 2px 4px rgba(0,0,0,0.25), inset 1px 1px 2px rgba(255,255,255,0.4)',
              border: '1.5px solid #909090',
              flexShrink: 0
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default SpiralBinding
