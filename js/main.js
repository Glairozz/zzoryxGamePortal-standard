// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Close mobile menu on link click
document.addEventListener('DOMContentLoaded', function () {
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      document.getElementById('mobileMenu').classList.remove('open');
    });
  });

  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Scroll animations
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });

  // Build game cards
  buildFeaturedGames();
  buildGameList();
});

function createGameCard(game, showInstructions) {
  var card = document.createElement('div');
  card.className = 'game-card';

  var firstLetter = game.name.charAt(0);

  card.innerHTML =
    '<a href="' + game.url + '" target="_blank" rel="noopener noreferrer" class="game-card-image">' +
      '<div class="card-icon">' + firstLetter + '</div>' +
      '<div class="card-overlay">' +
        '<svg class="play-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>' +
      '</div>' +
    '</a>' +
    '<div class="game-card-body">' +
      '<div class="game-card-title">' +
        '<a href="' + game.url + '" target="_blank" rel="noopener noreferrer">' + game.name + '</a>' +
        '<span class="category-badge">' + game.category + '</span>' +
      '</div>' +
      '<p class="game-card-desc">' + game.description + '</p>' +
      (showInstructions ? buildInstructions(game.instructions) : '') +
      '<a href="' + game.url + '" target="_blank" rel="noopener noreferrer" class="play-btn">' +
        '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>' +
        ' Play Now' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' +
      '</a>' +
    '</div>';

  return card;
}

function buildInstructions(instructions) {
  var html = '<div class="game-card-instructions"><h4>Instructions</h4><ol>';
  for (var i = 0; i < instructions.length; i++) {
    html += '<li><span class="step">' + (i + 1) + '</span><span>' + instructions[i] + '</span></li>';
  }
  html += '</ol></div>';
  return html;
}

// Featured games on landing page
function buildFeaturedGames() {
  var grid = document.getElementById('featuredGrid');
  if (!grid) return;

  var featured = games.filter(function (g) { return g.featured; });
  for (var i = 0; i < featured.length; i++) {
    var card = createGameCard(featured[i], false);
    card.classList.add('fade-in');
    grid.appendChild(card);
    // Trigger observer
    setTimeout(function (el) {
      var observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('visible');
          observer.disconnect();
        }
      }, { threshold: 0.1 });
      observer.observe(el);
    }, 100, card);
  }
}

// Games page
var activeCategory = 'All';
var searchQuery = '';

function buildGameList() {
  var grid = document.getElementById('gamesGrid');
  var catContainer = document.getElementById('categories');
  if (!grid || !catContainer) return;

  // Build category buttons
  catContainer.innerHTML = '';
  for (var i = 0; i < categories.length; i++) {
    var btn = document.createElement('button');
    btn.className = 'category-btn' + (categories[i] === activeCategory ? ' active' : '');
    btn.textContent = categories[i];
    btn.onclick = (function (cat) {
      return function () {
        activeCategory = cat;
        filterGames();
        // Update active state
        var btns = catContainer.querySelectorAll('.category-btn');
        btns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
      };
    })(categories[i]);
    catContainer.appendChild(btn);
  }

  filterGames();
}

function filterGames() {
  var grid = document.getElementById('gamesGrid');
  if (!grid) return;

  var searchInput = document.getElementById('searchInput');
  searchQuery = searchInput ? searchInput.value.toLowerCase() : '';

  var filtered = games.filter(function (game) {
    var matchCategory = activeCategory === 'All' || game.category === activeCategory;
    var matchSearch = game.name.toLowerCase().indexOf(searchQuery) !== -1;
    return matchCategory && matchSearch;
  });

  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results">No games found matching your search.</div>';
    return;
  }

  for (var i = 0; i < filtered.length; i++) {
    var card = createGameCard(filtered[i], true);
    card.style.animationDelay = (i * 0.1) + 's';
    grid.appendChild(card);
  }
}

// Parse URL params on games page
(function () {
  if (window.location.pathname.indexOf('games') === -1) return;
  var params = new URLSearchParams(window.location.search);
  var cat = params.get('category');
  if (cat) {
    var found = false;
    for (var i = 0; i < categories.length; i++) {
      if (categories[i].toLowerCase() === cat.toLowerCase()) {
        activeCategory = categories[i];
        found = true;
        break;
      }
    }
    // Also check if it matches category directly
    if (!found) {
      for (var j = 0; j < categories.length; j++) {
        if (categories[j].toLowerCase() === cat.toLowerCase()) {
          activeCategory = categories[j];
          break;
        }
      }
    }
  }
})();
