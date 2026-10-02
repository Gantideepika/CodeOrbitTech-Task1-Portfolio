// Basic JavaScript: highlights the current year in the footer.
document.querySelector("footer p").innerHTML =
  `© ${new Date().getFullYear()} Your Name. Built with HTML, CSS & JavaScript.`;
