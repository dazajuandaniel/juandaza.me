module.exports = {
    title: 'Juan Daza',
    configureWebpack: {
      resolve: {
        alias: {
          '@alias': '/dist/assets/img'
        }
      }
    },
    description: 'Personal Site - Data Science',
    head: [
      ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png"}],
      ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"}],
      ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"}],
      ['link', { rel: "manifest", href: "/favicons/site.webmanifest"}],
      ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
      ['meta', { name: "theme-color", content: "#ffffff"}],
    ],
    // base:"/notes/",
    theme:"book",
    themeConfig: {
      logo: '/photo.png',
      nav: [
        
          { text: 'Home', link: '/home' },
          { text: 'CV', link: '/cv' },
          { text: 'LinkedIn', link: 'https://www.linkedin.com/in/juandanieldaza' },],

        sidebar: [
          '/',
          {
            title: 'Help Snippets',
            collapsible: true,
            sidebarDepth: 2,
            children:[
              '/guide/snippets/python',
              '/guide/snippets/github',
              '/guide/snippets/pyspark'
            ]
          },
          '/guide/algos/',
          {
            title: 'Machine Learning',
            collapsible: true,
            sidebarDepth: 2,
            children:[
              '/guide/algos/MLlist',
              '/guide/algos/deep_learning',
              '/guide/algos/NLP',
            ]
          },
          {
            title: 'Graphs',
            collapsible: true,
            sidebarDepth: 2,
            children:[
              '/guide/graphs/resources',
            ]
          },
          '/guide/mlops/',
          {
            title: 'Ml Ops',
            collapsible: true,
            sidebarDepth: 2,
            children:[
              '/guide/mlops/docker',
              '/guide/mlops/jenkins',
              '/guide/mlops/metaflow',
              '/guide/mlops/terraform',
            ]
          },
          '/guide/data_engineer/',
          {
            title: 'Databricks',
            collapsible: true,
            sidebarDepth: 2,
            children:[
              '/guide/data_engineer/databricks/db_concepts',
              '/guide/data_engineer/databricks/db_data_engineering',
            ]
          }
        ]
        },
    plugins: [
          [
            '@vuepress/google-analytics',
            {
              'ga': 'UA-179969279-1'
            }
          ]
        ]
    }