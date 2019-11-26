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
                  buildHookId: '5ddd7a5aa93a0137374ca610',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6ordi5ts',
                  apiId: '2fc9edf5-c3c6-47fa-a3fe-89cc4027a0c4'
                },
                {
                  buildHookId: '5ddd7a5a17e2af3c87e7f530',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-uaj954ff',
                  apiId: '847b668a-67c2-4743-b5a4-ac7407c2cddc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andreasgulsrud/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-uaj954ff.netlify.com', category: 'apps'}
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
