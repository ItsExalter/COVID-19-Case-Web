class IndoCase extends HTMLElement {
    connectedCallback(){
        const apiUrl = ('https://covid19.mathdro.id/api/countries/Indonesia')
        $(document).ready(function(){
            $.ajax({url: `${apiUrl}`, success: function(result){
            $("#indo-positive").html(`${result.confirmed.value}`).autoNumeric('init', {aPad: false});
            $("#indo-recovered").html(`${result.recovered.value}`).autoNumeric('init', {aPad: false});
            $("#indo-death").html(`${result.deaths.value}`).autoNumeric('init', {aPad: false});
            }});
        });
        this.render();
    }

    render(){
        this.innerHTML = 
        `<div class="card-deck m-md-4">
        <div class="card bg-danger">
          <div class="card-body text-white">
                <i class="fas fa-viruses fa-3x py-4"></i>
                <h3>Positive:</h3>
                <h4 id="indo-positive" class="card-text pb-4"></h4>
          </div>
        </div>
        <div class="card bg-success">
          <div class="card-body text-white">
                <i class="fas fa-heartbeat fa-3x py-4"></i>
                <h3>Recovered:</h3>
                <h4 id="indo-recovered" class="card-text pb-4"></h4>
          </div>
        </div>
        <div class="card bg-black">
          <div class="card-body text-white">
                <i class="fas fa-skull fa-3x py-4"></i>
                <h3>Death:</h3>
                <h4 id="indo-death" class="card-text pb-4"></h4>
          </div>
        </div>  
    </div>`;
    }
}

customElements.define("indo-case", IndoCase)