export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout'),
    children: [
            {
                path: '',
                name: 'no-entry',
                component: () => import(/* webpackChunkName: "daybook-noentry" */ '@/modules/daybook/views/NoEntrySelected.vue'),

            },
            {
                path: ':id',
                name: 'entry',
                component: () => import(/* webpackChunkName: "daybook-entry" */ '@/modules/daybook/views/EntryView.vue'),
                props: (route) => {
                        return {
                            id: route.params.id
                        }
                }
            }
    ]
}