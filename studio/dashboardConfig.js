export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc95a11b35a8457876eb157',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jqsa2wtm',
                  apiId: '08b23d06-6fb2-4e1d-809e-d007d4c5fb61'
                },
                {
                  buildHookId: '5dc95a1121788d08d6cbb30f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tt5od4ss',
                  apiId: '1e80fce9-d7a3-422c-b81d-7d910d26fcc4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dancarmel/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tt5od4ss.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
