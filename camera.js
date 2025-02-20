/*
(function (){


   
    var canvas = document.getElementById('canvas'),  
        video = document.getElementById('video');

    let start__camera = document.getElementById('start__camera');
    let take__photo = document.getElementById('take__photo');
    let close__camera = document.getElementById('close__camera');
    let message__block = document.querySelector('.photo__message');
    let container = document.querySelector('.container');
    let control__bat = document.querySelector('.photo__buttonBox');
    let width = 320;    // Этим создадим ширину фотографии
    let height = 0;

    height = video.videoHeight / (video.videoWidth/width);
    

    canvas.setAttribute('width', 828);//828    1920
    canvas.setAttribute('height', 1792);    //1792px      1680
    
    start__camera.addEventListener('click', async function () {
        
        let stream = null

        try {
            stream = await navigator.mediaDevices.getUserMedia(
                {
                    video: {
                      width: {
                        min: 1280,
                        max: 1920,
                      },
                      height: {
                        min: 720,
                        max: 1080
                      }
                    },
                    facingMode: 'user'
                  },
            )
        }
        catch (error)
        {
            alert(error.message) 
            return;
        }

        video.srcObject = stream;


        
        take__photo.style.display = "block";
        take__upload.style.display = "block";
        close__camera.style.display = "block";

        
        video.style.display = "block";
        message__block.style.display = "none";
        start__camera.style.display = "none";
        control__bat.style.justifyContent = "space-evenly";

        container.classList.add('other__container');
        control__bat.classList.add('control__bat');
    })

    take__photo.addEventListener('click' , async function(){
        canvas.getContext('2d').drawImage(video, 0 , 0 , canvas.width , canvas.height);
        let image_data_url = canvas.toDataURL('image/jpeg');

        //canvas.style.zIndex = '2';

        /*
        container.classList.remove('other__container');
        control__bat.classList.remove('control__bat');
*//*
        console.log(image_data_url)
    })

    close__camera.addEventListener('click' , async function () {
        container.classList.remove('other__container');
        control__bat.classList.remove('control__bat');

        take__photo.style.display = "none";
        take__upload.style.display = "none";
        close__camera.style.display = "none";
        start__camera.style.display = "block";
        video.style.display = "none";
        message__block.style.display = "flex";
        
    })
})();*/