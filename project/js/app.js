const showMenu = (toggleId, navId) => {
    const toggle = document.querySelector(toggleId),
      nav = document.querySelector(navId)
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show")
      })
    }
  }
  showMenu('#toggleId', '#naveg')
  
  /*===== REMOVE MENU =====*/
  const navLink = document.querySelectorAll('.nav__link'),
    navMenu = document.querySelector('#naveg')
  
  function linkAction() {
    navMenu.classList.remove('show')
  }
  
  navLink.forEach(n => n.addEventListener('click', linkAction))

  const BASE_URL ='http://localhost:1337/';

  async function carregarDados(colecao){
        const resposta = await fetch(BASE_URL + colecao);
        const dados = await resposta.json();
        return dados;
  }
  async function buscarMotorcycles(){
      const motos = carregarDados('/motorcycles');
      return motos;
  }
  async function buscarMaterials(){
      const materiais = await carregarDados('/materials');
      return materiais;
  }
  async function buscarMotoPorType(tipo){
        const motos = await carregarDados('/motorcycles?type=${tipo}');
        return motos[0].name;
    }
async function incluirMotosProntasnoDOM(){
    const motos = await buscarMotoPorType('pronto'),
        container = document.querySelector("#modelosProntos");
    for(const moto of motos){
        const {price, image} = moto,
        preco = price.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
        container.innerHTML += `
            <div class="moto">
                <img src=${BASE_URL}${image.url} id="moto">
                <p class="preco"> ${preco}</p>
            </div>
            `
            ;
        
    }

}
    





    
    