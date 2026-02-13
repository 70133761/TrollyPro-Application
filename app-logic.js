// Firebase Setup (Aapne console se copy karke yahan dalna hai)
const firebaseConfig = {
  apiKey: "AIzaSy...",
  databaseURL: "https://trollypro-default-rtdb.firebaseio.com",
  projectId: "trollypro",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// User ki booking save karne ka function
function sendBookingToFirebase(pickup, dropoff) {
    const bookingId = Date.now();
    database.ref('bookings/' + bookingId).set({
        pickup: pickup,
        dropoff: dropoff,
        status: "pending",
        user_email: "abc@gmail.com"
    }).then(() => {
        console.log("Data Sent to Firebase!");
    });
}