import iconSedans from "../assets/icon-sedans.svg"

function Sedans() {
  return (
    <div className="bg-orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg">
        <img src={iconSedans} alt="Ícone dos carros sedan" className="mb-7"/>
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
        <p className="font-lexend mb-7 text-offwhite lg:mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
        <a href="https://www.webmotors.com.br/sedans" target="_blank" className="font-lexend block w-fit bg-offwhitebg px-10 py-3 rounded-3xl text-orange border-2 border-offwhitebg hover:bg-orange hover:text-offwhitebg">Ver Mais</a>
    </div>
  )
}

export default Sedans
