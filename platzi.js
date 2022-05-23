class PlatziReactive{

    constructor(options){
        this.origen = options.data();
    }

    mount(){
        document.querySelectorAll("*[p-text]").forEach(element => {
            this.pText(element, this.origen, element.getAttribute("p-text"));
        });
    }

    pText(element, target, name){
        element.innerText = target[name];
    }

    pModel(){}
    

}


var Platzi = {
    createApp(options){
        return new PlatziReactive(options)
    }
};