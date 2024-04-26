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



//this is where we apply opacity to the arrow
$(window).scroll( function(){

  //get scroll position
  var topWindow = $(window).scrollTop();
  //multipl by 1.5 so the arrow will become transparent half-way up the page
  var topWindow = topWindow * 1.5;
  
  //get height of window
  var windowHeight = $(window).height();
      
  //set position as percentage of how far the user has scrolled 
  var position = topWindow / windowHeight;
  //invert the percentage
  position = 1 - position;

  //define arrow opacity as based on how far up the page the user has scrolled
  //no scrolling = 1, half-way up the page = 0
  $('.arrow-wrap').css('opacity', position);

});

$('#show').on('click', function () {
    $('.center').show();
    $(this).hide();
})

$('#close').on('click', function () {
    $('.center').hide();
    $('#show').show();
})