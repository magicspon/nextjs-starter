
module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'Enter the page name:',
	},
	{
		type: 'input',
		name: 'path',
		message: 'Enter the pages directory',
		initial: '/',
	},
	{
		type: 'select',
		name: 'strategy',
		message: 'uses getStaticPaths',
		choices: ['SSG', 'SSR'],
		initial: 'SSG',
	},
	{
		type: 'toggle',
		name: 'paths',
		message: 'uses getStaticPaths',
		initial: false,
	},
]
