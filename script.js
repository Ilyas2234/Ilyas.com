document.getElementById("gachaButton").addEventListener("click", function() {
    // Angka acak antara 50 hingga 500 sebagai reward berlian
    const diamondReward = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
    const resultDiv = document.getElementById("result");

    resultDiv.textContent = `Selamat! Anda mendapatkan ${diamondReward} berlian!`;
});
