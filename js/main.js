const { createApp } = Vue;

createApp({
    data() {
        return {
            heading: 'Hello World!',
            classeContainer: 'container',
        }
    },
    methods: {
        }
}).mount('#app')