export function ScrollTop() {
    window.onload = () => {
        const content = document.querySelector('.content');
        if (content) {
          content.scrollTop = 0; // Asegura que el scroll esté en la parte superior
        }
      };
}
