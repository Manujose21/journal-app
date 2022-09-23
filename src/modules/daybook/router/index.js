
export default {
  name: "daybook",
  component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layout/DaybookLayout'),
  children: [
    {
      path: "",
      name: "not-entry",
      component: () => import(/* webpackChunkName: "daybook-not-entry" */ '@/modules/daybook/views/NotEntrySelected')

    },
    {
      path: ":entry",
      name: "entry-view",
      component: () => import(/* webpackChunkName: "entry-view" */ '@/modules/daybook/views/EntryView'),
      props: ( route ) =>{
        return {
          id: route.params.entry
        }
      }
      
      
    }
  ]
}