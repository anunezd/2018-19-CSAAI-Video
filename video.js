function main()
{
  display: document.getElementById('display')

  //-- Obtener el elemento de video
  video1 = document.getElementById("video1")
  video2 = document.getElementById("video2")
  video3 = document.getElementById("video3")
  video4 = document.getElementById("video4")

  //-- Establecer el tamaño del vídeo
  video1.width = 400;
  video1.height= 200;
  video1.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  video1.onmouseover = () => {
    console.log("Raton encima video 1")
    video1.muted = false;}
  video1.onmouseout = () => {
    console.log("Raton fuera video 1")
    video1.muted = true;}
  video2.width = 400;
  video2.height= 200;
  video2.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  video2.onmouseover = () => {
    console.log("Raton encima video 2")
    video2.muted = false;}
  video2.onmouseout = () => {
    console.log("Raton fuera video 2")
    video2.muted = true;}
  video3.width = 400;
  video3.height= 200;
  video3.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
  video3.onmouseover = () => {
    console.log("Raton encima video 3")
    video3.muted = false;}
  video3.onmouseout = () => {
    console.log("Raton fuera video 3")
    video3.muted = true;}
  video4.width = 800;
  video4.height= 400;

  //-- Boton de Play
  ver1 = document.getElementById('play1')
  ver2 = document.getElementById('play2')
  ver3 = document.getElementById('play3')

  //-- Al apretar el boton de ver video
  ver1.onclick = () => {
    video4.src = video1.src
    video4.currentTime = video1.currentTime
    display.innerHTML = 'VIDEO A'
  }
  ver2.onclick = () => {
    video4.src = video2.src
    video4.currentTime = video2.currentTime
    display.innerHTML = 'VIDEO B'
  }
  ver3.onclick = () => {
    video4.src = video3.src
    video4.currentTime = video3.currentTime
    display.innerHTML = 'VIDEO C'
  }

  video4.addEventListener("timeupdate",function(ev){
      var time  = (video4.currentTime);
      var hours = Math.floor( time / 3600 );
      var minutes = Math.floor( (time % 3600) / 60 );
      var seconds = Math.floor(time % 60);

      var result = hours + ":" + minutes + ":" + seconds;
      clk.innerHTML = result;
    },true);

}

