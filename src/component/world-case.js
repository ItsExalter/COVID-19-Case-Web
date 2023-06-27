class WorldCase extends HTMLElement{
    connectedCallback(){
        const apiUrl = ('https://covid19.mathdro.id/api')
        $(document).ready(function(){
            $.ajax({url: `${apiUrl}`, success: function(result){
            $("#positive").html(`${result.confirmed.value}`).autoNumeric('init', {aPad: false});
            $("#recovered").html(`${result.recovered.value}`).autoNumeric('init', {aPad: false});
            $("#death").html(`${result.deaths.value}`).autoNumeric('init', {aPad: false});
            }});
        });
        this.render();
    }

    render() {
        this.innerHTML = 
        `<div class="carousel-inner" role="listbox">
        <div class="carousel-item pt-3 active">
            <h3>Positive: <span id="positive"></span></h3>
        </div>
        <div class="carousel-item pt-3">
            <h3>Recovered: <span id="recovered"></span></h3>
        </div>
        <div class="carousel-item pt-3">
            <h3>Death: <span id="death"></h3>
        </div>
    </div>`;
    }
}
customElements.define("world-case", WorldCase);