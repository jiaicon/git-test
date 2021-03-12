export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/view/:id',
        component: './Article/h5',
      },
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                authority: ['admin'],
                component: './Welcome',
              },
              {
                path: '/article',
                name: 'article',
                icon: 'FileTextOutlined',
                authority: ['admin'],
                routes: [
                  {
                    path: '/article',
                    redirect: '/article/list'
                  },
                  {
                    path: '/article/list',
                    name: 'list',
                    component: './Article/list',
                    authority: ['admin'],
                  },
                  {
                    path: '/article/view/:id',
                    component: './Article/view',
                    authority: ['admin'],
                  },
                  {
                    path: '/article/create',
                    name: 'create',
                    component: './Article/create',
                    authority: ['admin'],
                  },
                  {
                    path: '/article/update/:id',
                    component: './Article/update',
                    authority: ['admin'],
                  }
                ]
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
