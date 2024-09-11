// testonomial section 
document.addEventListener("DOMContentLoaded", function () {
    const starWidgets = document.querySelectorAll('.star-widget');
  
    starWidgets.forEach(widget => {
      const stars = widget.querySelectorAll('input[type="radio"]');
      
      stars.forEach(star => {
        star.addEventListener('change', () => {
          // Clear previously selected stars
          stars.forEach(s => {
            const label = widget.querySelector(`label[for="${s.id}"]`);
            if (s.checked) {
              label.style.color = '#e4b40a'; // Highlight selected
            } else {
              label.style.color = '#ccc'; // Reset color for unselected
            }
          });
        });
      });
    });
  });
  