const Loader = ({ fullscreen = true, size = '2rem' }) => (
  <>
    <style>{`@keyframes _loaderSpin { to { transform: rotate(360deg) } }`}</style>
    <div style={{
      width: fullscreen ? '100vw' : size,
      height: fullscreen ? '100vh' : size,
      display: 'grid',
      placeItems: 'center',
      background: fullscreen ? '#f1f1f1' : 'transparent',
    }}>
      <span style={{
        display: 'block',
        width: size,
        height: size,
        borderRadius: '50%',
        border: '2px solid rgba(15,15,15,0.1)',
        borderTopColor: 'rgba(15,15,15,0.6)',
        animation: '_loaderSpin 0.65s linear infinite',
      }} />
    </div>
  </>
);

export default Loader;