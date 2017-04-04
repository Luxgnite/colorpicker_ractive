var toHexa = function (colors) {
    return ("0" + colors[0].value.toString(16)).slice(-2) +
    ("0" + colors[1].value.toString(16)).slice(-2) +
    ("0" + colors[2].value.toString(16)).slice(-2);
};

var ractive = new Ractive({
    el: '#colorpicker',
    template: "#template",
    data: {
        colors: [
            {
                name: 'red',
                value: '0'
            },
            {
                name: 'green',
                value: '0'
            },
            {
                name: 'blue',
                value: '0'
            }
        ],
        hexa: function () {
            return toHexa(this.get("colors"));
        }
    }
});

ractive.on('addColor', function (event) {
    ractive.push('favColors', {
        value: toHexa(this.get('colors')),
        r: this.get('colors[0].value'),
        g: this.get('colors[1].value'),
        b: this.get('colors[2].value')
    });
    console.log(ractive.get('favColors'));
});

ractive.on('restoreColor', function (event, index){
this.set("colors[0].value", this.get("favColors["+index+"].r"));
this.set("colors[1].value", this.get("favColors["+index+"].g"));
this.set("colors[2].value", this.get("favColors["+index+"].b"));
});