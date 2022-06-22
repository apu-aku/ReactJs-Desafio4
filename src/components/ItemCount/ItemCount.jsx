import React from "react";
import "./ItemCount.css"

export default function ItemCount({ totalStock }){
    let currentItems = 0
    let stock = totalStock

    let buttonAdd = document.querySelector(".buttonAdd")
    let buttonSubtract = document.querySelector(".buttonSubtract")
    let buttonFinish = document.querySelector(".buttonFinish")

    /*buttonAdd.addEventListener("click", ()=>{
        if(currentItems < stock){
            currentItems += 1;
        }
        else{
            alert("No hay suficiente Stock")
        }
    })*/

   /* buttonSubtract.addEventListener("click", ()=>{
        if(currentItems > 0){
            currentItems -= 1;
        }
    })*/

    function addmore(){
        currentItems += 1;
    }



    return(
        <main>
            <section>
                <div> Stock Total: <p> {stock}</p> </div>
            </section>

            <section>
                <button className="buttonAdd" onclick="addmore()"> + </button>
                <p> {currentItems} </p>
                <button className="buttonSubtract"> - </button>
            </section>

            <section>
                <button className="buttonFinish"> Agregar al Carrito </button>
            </section>
        </main>
    );
}