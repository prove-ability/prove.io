module.exports = {
	title: 'prove dev',
	description: 'Just playing around2',
	base: '/gh-pages',
	themeConfig: {
		// lastUpdated: 'Last Updated',
		smoothScroll: true,
		logo: '/logo.png',
		sidebar: [
			{
				title: 'about prove', // required
				path: '/about/', // optional, which should be a absolute path.
				collapsable: false, // optional, defaults to true
				sidebarDepth: 1 // optional, defaults to 1
				// children: [ '/' ]
			}
		]
	}
};
