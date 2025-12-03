import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hi, I'm Hiro! Welcome to my portfolio!</h1>
      <div>
        <img src="#" alt="profile img" />
        <h2>Hiro</h2>
      </div>
      <div>
        <p>comment</p>
      </div>
      <div>
        <h3>IT</h3>
        <div>
          <p>GitHub</p>
          <img src="#" alt="GitHub" />
          <p>Qiita</p>
          <img src="#" alt="Qiita" />
        </div>
        <div>
          <h3>Hobby</h3>
          <div>
            <p>読書メーター</p>
            <img src="#" alt="読書メーター" />
            <p>Annict</p>
            <img src="#" alt="Annict" />
          </div>
        </div>
      </div>
    </div>
  );
}
