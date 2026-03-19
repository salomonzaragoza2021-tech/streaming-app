const SUPABASE_URL = "TU_URL";
const SUPABASE_KEY = "TU_API_KEY";

async function cargarVideos() {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/videos`, {
        headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`
        }
    });

    const data = await res.json();

    const contenedor = document.getElementById("videos");

    data.forEach(video => {
        contenedor.innerHTML += `
            <div>
                <h3>${video.titulo}</h3>
                <video width="300" controls>
                    <source src="${video.url}" type="video/mp4">
                </video>
            </div>
        `;
    });
}

cargarVideos();