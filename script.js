function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function applyFilter(filter) {
  // You can customize this function to load different JSON files based on the selected filter
  switch(filter) {
    case 'level1':
      // Load JSON file for Level 1 filter
      console.log('Filter: Level 1');
      break;
    case 'level2':
      // Load JSON file for Level 2 filter
      console.log('Filter: Level 2');
      break;
    case 'level3':
      // Load JSON file for Level 3 filter
      console.log('Filter: Level 3');
      break;
    default:
      console.log('Invalid filter');
  }
}
// Load JSON data
fetch('portfolio.json')
  .then(response => response.json())
  .then(data => {
    // Code to display projects and handle filtering
  })
  .catch(error => console.error('Error loading portfolio data:', error));

// Filter projects based on selected level
function filterProjects(level) {
  // Hide all projects
  document.querySelectorAll('.project').forEach(project => {
    project.style.display = 'none';
  });

  // Show projects of selected level
  document.querySelectorAll(`.project[data-level="${level}"]`).forEach(project => {
    project.style.display = 'block';
  });
}

// Example usage: filterProjects('level1');