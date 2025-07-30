import styles from './VideoPlayer.module.css';

export default function VideoPlayer() {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop playsInline className={styles.video}>
        <source src="/Ling gang guli guli guli.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
