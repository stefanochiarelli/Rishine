export async function fetchTratamientosJSON() {
    const response = await fetch('./tratamientos.json');
    const tratamientos = await response.json();
    return tratamientos;
  }
  