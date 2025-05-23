#clock {
  font-family: Arial, sans-serif;
  font-size: 5em;
  color: #00FF00; 
  text-shadow: 0 0 5px #00FF00, 0 0 10px #00FF00; 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000; 
}

#colon1,
#colon2 {
  animation: blink 1s infinite; 
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
