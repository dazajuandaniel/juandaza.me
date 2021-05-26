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
              '/guide/dl/deep_learning',
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
          '/guide/certifications/',
          {
            title: 'AWS SA',
            collapsible: true,
            sidebarDepth: 2,
            children:[
              '/guide/certifications/aws/0_aws_general',
              '/guide/certifications/aws/1_aws_iam',
              '/guide/certifications/aws/2_aws_ec2',
              '/guide/certifications/aws/3_aws_ec2_instance_storage',
              '/guide/certifications/aws/4_aws_elb',
              '/guide/certifications/aws/5_aws_asg',
              '/guide/certifications/aws/6_aws_databases',
            ]
          },
          {
            title: 'Azure ML DP-100',
            collapsible: true,
            sidebarDepth: 2,
            children:[
              '/guide/certifications/azure_dp_100/dp100_exam_review',
              '/guide/certifications/azure_dp_100/dp100_aml_summary',
              '/guide/certifications/azure_dp_100/dp100_pt1',
              '/guide/certifications/azure_dp_100/dp100_pt2',
              '/guide/certifications/azure_dp_100/dp100_pt3',
              '/guide/certifications/azure_dp_100/dp100_module1',
              '/guide/certifications/azure_dp_100/dp100_module2',
              '/guide/certifications/azure_dp_100/dp100_module3',
              '/guide/certifications/azure_dp_100/dp100_module4',
              '/guide/certifications/azure_dp_100/dp100_module5',
              '/guide/certifications/azure_dp_100/dp100_module6',
              '/guide/certifications/azure_dp_100/dp100_module7',
              '/guide/certifications/azure_dp_100/dp100_module8',
              '/guide/certifications/azure_dp_100/dp100_module9',
              '/guide/certifications/azure_dp_100/dp100_module10'
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