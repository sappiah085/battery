const time = document.querySelector('.time');
const percentage = document.querySelector('.percentage');



setInterval(()=>{
  const getTime = new Date();
  var am = 'Pm';
  const hour = (getTime.getHours())%12;
  const hours = getTime.getHours();
  const minute = getTime.getMinutes();
  const sec = getTime.getSeconds();
  if(hours < 12){
    am = 'Am';
  }
  time.textContent = `${hour} : ${minute} : ${sec} ${am}`


  navigator.getBattery().then((battery)=>{
    const width = battery.level*100;
    percentage.style.width = `${width}%`;
  });
  
}, 100);
