
async function startCamera() {
    let constraints;
    let devices, videoDevices,selectedDevice;
    if (isIOS()) {
        if ( selectedCameraId!='' ) {
            constraints = {
                audio: false,
                video: {
                    facingMode: selectedCameraId
                    , frameRate: {ideal: 5, max: 30}
                }
            }
        }
    }
    else {
        devices        = await navigator.mediaDevices.enumerateDevices();
        videoDevices   = devices.filter(device => device.kind === 'videoinput');
        selectedDevice = videoDevices.find(device => device.deviceId === selectedCameraId);
    
    
        if (selectedDevice) {
            constraints = {
                video: {
                    deviceId   : selectedCameraId
                    , frameRate: {ideal: 5, max: 30} // Set your desired frame rate here (in this example, 15 fps); lower rates will reduce the demand on the device - which will heat up if left on too long
                },
                audio: false
            };
        }
    }
    
    
    if ( constraints ) {
        await navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
            _mediaStream = stream;
            _videoElement.srcObject = stream;
    
            _videoElement.setAttribute('autoplay', '');
            _videoElement.setAttribute('muted', '');
            _videoElement.setAttribute('playsinline', '');
        });
    }





function takeSnapshot() {
    const ctx = snapshotCanvas.getContext('2d');
    ctx.drawImage(videoElement, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
    snapshotImage.src = snapshotCanvas.toDataURL('image/'+imgtype.value);
}
}