import { App, NotFound } from 'containers';

export default [
  {
    component: App,
    routes: [{ path: '/', exact: true, component: NotFound }, { component: NotFound }]
  }
];
