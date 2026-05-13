// javascript/panel.js faylı
export const getMasters = async () => {
    try {
        const response = await fetch('https://69bfc34f72ca04f3bcb92a0d.mockapi.io/category');
        const data = await response.json();
        // Datanın array olduğundan əmin oluruq
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error("Xəta baş verdi:", error);
        return [];
    }
};