<!-- Firebase App (core SDK) -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>

<!-- Firebase Firestore -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>

<script>
  // Firebase configuration (as provided by you)
  const firebaseConfig = {
    apiKey: "AIzaSyBadYpoNTL0dHkBQO4UddRVtPIfUOlf-bA",
    authDomain: "sgmc-16568.firebaseapp.com",
    projectId: "sgmc-16568",
    storageBucket: "sgmc-16568.firebasestorage.app",
    messagingSenderId: "339041646158",
    appId: "1:339041646158:web:85d9a50a3b51b30aae351f",
    measurementId: "G-4996NPF55N"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Firestore database reference
  const db = firebase.firestore();
</script>
