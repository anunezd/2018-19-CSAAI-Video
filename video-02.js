function main()
{
  console.log("Video 02...")

  //-- Obtener el elemento de video
  video1 = document.getElementById("video1")
  video2 = document.getElementById("video2")
  video3 = document.getElementById("video3")
  video4 = document.getElementById("video4")

  //-- Establecer el tamaño del vídeo
  video1.width = 200;
  video1.height= 100;
  video1.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  video2.width = 200;
  video2.height= 100;
  video2.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  video3.width = 200;
  video3.height= 100;
  video3.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
  video4.width = 400;
  video4.height= 200;

  //-- Boton de Play
  ver1 = document.getElementById('play1')
  ver2 = document.getElementById('play2')
  ver3 = document.getElementById('play3')

  //-- Al apretar el boton de ver video
  ver1.onclick = () => {
    video4.src = video1.src
    video4.currentTime = video1.currentTime}
  ver2.onclick = () => {
    video4.src = video2.src
    video4.currentTime = video2.currentTime}
  ver3.onclick = () => {
    video4.src = video3.src
    video4.currentTime = video3.currentTime}
}
