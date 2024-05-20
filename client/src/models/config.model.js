function getLocalIP(callback) {
    // Create a dummy RTCPeerConnection object
    const rtcPeerConnection = new RTCPeerConnection({iceServers: []});
    
    // Create a dummy data channel
    rtcPeerConnection.createDataChannel('');

    // Set up event listeners for ICE candidate gathering
    rtcPeerConnection.onicecandidate = (event) => {
        if (event.candidate) {
            // Extract the IP address from the candidate
            const ip = event.candidate.candidate.split(' ')[20];
            callback(ip);
        }
    };

    // Create an offer (this triggers the gathering of ICE candidates)
    rtcPeerConnection.createOffer()
        .then((offer) => rtcPeerConnection.setLocalDescription(offer))
        .catch((error) => console.error('Error creating offer:', error));
}

// Use the function to get the local IP address and display it
export const api = "https://f94319ab-55ce-40ed-94f0-bdc64da8f6a6-00-39tt120ugwq6i.sisko.replit.dev:3001";