const loader = document.querySelector('.loader-wrapper');

window.addEventListener('load', () => {
	setTimeout(() => {
		loader.style.opacity = 0;
		loader.style.display = 'none';						
	}, 1500)	
}); 


const projects = [
	{
		title: 'Tic-tac-toe game', 
		url: 'https://acwcheung.github.io/X-game/',
		image: 'game.png',
		git: 'https://github.com/acwcheung/X-game',
		tag: '#html #css #react'
	},
	{
		title: 'Pixel art maker', 
		url: 'https://acwcheung.github.io/pixel-art/',
		image: 'pixel.png',
		git: 'https://github.com/acwcheung/pixel-art',
		tag: '#html #css #JavaScript'
	},
	{
		title: 'Craft Chocolate', 
		url: 'https://acwcheung.github.io/choco/',
		image: 'choco.png',
		git: 'https://github.com/acwcheung/choco',
		tag: '#html #css #JavaScript'
	},
	{
		title: 'Facial Recognition', 
		url: 'https://smart-brainnimage.herokuapp.com/',
		image: 'face.png',
		git: 'https://github.com/acwcheung/smartbrain',
		tag: '#html #css #JavaScript #react #node #express #heroku'
	},
	{
		title: 'Movie Plus', 
		url: 'https://movie-plus.herokuapp.com/',
		image: 'movie.png',
		git: 'https://github.com/acwcheung/movieplus',
		tag: '#html #css #JavaScript #react #heroku'
	},
	{
		title: 'Weather app', 
		url: 'https://acwcheung.github.io/weather-app/',
		image: 'weather.png',
		git: 'https://github.com/acwcheung/weather-app',
		tag: '#html #css #JavaScript #API'
	},
	{
		title: 'Recipe app', 
		url: 'https://acwcheung.github.io/recipe-app/',
		image: 'recipe.png',
		git: 'https://github.com/acwcheung/flashcard',
		tag: '#html #css #JavaScript #react #API'
	},	
	{
		title: 'Pure CSS Flower', 
		url: 'https://acwcheung.github.io/flower/',
		image: 'flower.png',
		git: 'https://github.com/acwcheung/flower',
		tag: '#html #css #JavaScript'
	},
	{
		title: 'To do list', 
		url: 'https://acwcheung.github.io/todo-list/',
		image: 'todo.png',
		git: 'https://github.com/acwcheung/todo-list',
		tag: '#html #css #JavaScript'
	},
	{
		title: 'Interactive list with React', 
		url: 'https://acwcheung.github.io/react-app/',
		image: 'reactlist.png',
		git: 'https://github.com/acwcheung/react-app',
		tag: '#html #css #react'
	}

]

function display() {
	const portfolio = document.querySelector('.portfolio-container');
	portfolio.innerHTML = projects.map(project => {
		const { title, git, image, url, tag } = project;
		return `
		<div 
		  class="project-container" 
		  data-aos="zoom-in-up"
		  data-aos-duration="1000"
		>
          <a href=${url} target="_blank">
            <div 
            	class="screenshot" 
            	style="background-image: url(${image})">
            </div>
          </a>
          <p class="project-title">${title}
            <a href=${git}>
              <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>    
            </a>
          </p>
          <p class="tag">${tag}</p>
          
        </div>
		`
	}).join('');
}

display();