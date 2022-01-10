//imports
import "./scss/styles.scss";
import { fetchTratamientosJSON } from "./modal";




//declaraciones DOM
const navBurg = document.querySelector('.navbar-burger'),
    glass = document.querySelector('.inicioNavMobil__dragDiv'),
    modalServ = document.querySelector('.modalServicios'),
    modalServBody = document.querySelector('.modal-card-body'),
    verMas = document.querySelectorAll('.boxGrillas__verMas'),
    buttonDelete = document.querySelector('.delete')

navBurg.addEventListener('click', () => {
    document.querySelector('.navbar-menu').classList.toggle('is-active')
})

//Animacion Parallax
if(window.location.pathname.includes('index')){
    addEventListener('scroll', () => {
        let scrolled = scrollY
        let paraRate = scrolled * 0.7

        glass.style.transform = `translate3d(0px, -${paraRate}px, 0px)`
    })
}

//Datos Json

if(window.location.pathname.includes('servicios')){
    // fetchTratamientosJSON().then(tratamientos => {
    //    let data = tratamientos;
    //     data.forEach((e) => {
    //         modalServ.innerHTML += e.descripcion
    //     })
        
        
    // });

    //delete
    buttonDelete.addEventListener('click', () => {
        modalServ.classList.toggle('is-active')
    })

    //evento VerMas
    verMas.forEach( (a) => {
        a.addEventListener('click', (e) => {
            modalServ.classList.toggle('is-active')
            applyContent(e.target.attributes[1].value)
        })
    })


}

//funcion applyContent

const applyContent = (e) => {
    fetchTratamientosJSON().then(tratamientos => {
       let data = tratamientos;
       let filteredElem = data.filter( r => r.id === parseFloat(e))

        modalServBody.innerHTML = filteredElem.map(f => f.descripcion)
        
    });

}