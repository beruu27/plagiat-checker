document.getElementById("uploadForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  const hasilBox = document.getElementById("hasil");
  hasilBox.innerHTML = "⏳ Memproses... Mohon tunggu...";

  try {
    const response = await fetch("https://plagiat-api.onrender.com/cek", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Gagal cek plagiat");

    const data = await response.json();
    hasilBox.innerHTML = `✅ Kemiripan Ditemukan: <strong>${data.similarity.toFixed(2)}%</strong>`;
  } catch (error) {
    hasilBox.innerHTML = `❌ Terjadi kesalahan: ${error.message}`;
  }
});
