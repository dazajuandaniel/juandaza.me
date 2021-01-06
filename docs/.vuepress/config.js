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
            title: 'Snippets',
            collapsible: true,
            sidebarDepth: 2,
            children:[
              '/guide/snippets/python',
              '/guide/snippets/github',
              '/guide/snippets/pyspark'
            ]
          },
          {
            title: 'Machine Learning',
            collapsible: true,
            sidebarDepth: 2,
            children:[
              '/guide/algos/MLlist',
              '/guide/algos/Models',
              '/guide/algos/NLP',
            ]
          },
          {
            title: 'AWS SA',
            collapsible: true,
            sidebarDepth: 2,
            children:[
              '/guide/aws/0_aws_general',
              '/guide/aws/1_aws_iam',
              '/guide/aws/1_aws_s3',
            ]
          },
          {
            title: 'AWS ML',
            collapsible: true,
            sidebarDepth: 2,
            children:[
              '/guide/aws_ml/sagemaker_studio',
            ]
          },
          {
            title: 'Azure ML',
            collapsible: true,
            sidebarDepth: 2,
            children:[
              '/guide/azure/dp100_exam_review',
              '/guide/azure/dp100_aml_summary',
              '/guide/azure/dp100_pt1',
              '/guide/azure/dp100_pt2',
              '/guide/azure/dp100_pt3',
              '/guide/azure/dp100_module1',
              '/guide/azure/dp100_module2',
              '/guide/azure/dp100_module3',
              '/guide/azure/dp100_module4',
              '/guide/azure/dp100_module5',
              '/guide/azure/dp100_module6',
              '/guide/azure/dp100_module7',
              '/guide/azure/dp100_module8',
              '/guide/azure/dp100_module9',
              '/guide/azure/dp100_module10',
            ]
          },
          {
            title: 'Containers',
            collapsible: true,
            sidebarDepth: 2,
            children:[
              '/guide/containers/docker',
            ]
          },
          {
            title: 'Other Learning',
            collapsible: true,
            sidebarDepth: 2,
            children:[
              '/guide/learning/terraform',
              '/guide/learning/jenkins',
              '/guide/learning/metaflow',
            ]
          },
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