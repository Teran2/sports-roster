
const conure = {
  name: 'Green Cheek Conure',
  src: 'https://www.thesprucepets.com/thmb/kaI1sCUfTUj1o8SwvA47rPFJwdc=/2121x0/filters:no_upscale():strip_icc()/GettyImages-568869691-58a6ebd43df78c345b6246bf.jpg',
  height: '350px',
  width:'700px'
}

export default function Mascot() {
  return (
    <main>
      <div>
        <h1>{conure.name}</h1>
        <img src={conure.src} height={conure.height} width={conure.width}/>
      </div>
    </main>
  );
}