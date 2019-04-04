function main()
{
  console.log("Video 02...")

  //-- Obtener el elemento de video
  video1 = document.getElementById("video1")
  video2 = document.getElementById("video2")
  video3 = document.getElementById("video3")

  //-- Establecer el tamaño del vídeo
  video1.width = 200;
  video1.height= 100;
  video2.width = 200;
  video2.height= 100;
  video3.width = 200;
  video3.height= 100;

  //-- Boton de Play
  ver1 = document.getElementById('play1')
  ver2 = document.getElementById('play2')
  ver3 = document.getElementById('play3')

  //-- Al apretar el boton de ver video
  ver1.onclick = () => {
    console.log("Ver!")
    video1.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"}
  ver2.onclick = () => {
    console.log("Ver!")
    video2.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"}
  ver3.onclick = () => {
    console.log("Ver!")
    video3.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"}
}
