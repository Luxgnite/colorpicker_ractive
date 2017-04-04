var ractive = new Ractive({
    el: '#colorpicker',
    template: "#template",
    data: {
        colors: [
            {
                name: 'red',
                value: 0
            },
            {
                name: 'green',
                value: 0
            },
            {
                name: 'blue',
                value: 0
            }
        ]
    }
});
