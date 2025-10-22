'use client'

import { useState } from 'react'
import { X, MessageCircle } from 'lucide-react'

interface Drink {
  id: string
  name: string
  ingredients: string
  image: string
  description: string
  origin: string
}

const drinks: Drink[] = [
  {
    id: 'caipirinha',
    name: 'Caipirinha',
    ingredients: 'Cachaça, limão e açúcar',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop',
    description: 'O drink mais brasileiro que existe, a caipirinha nasceu no interior de São Paulo no século XIX.',
    origin: 'Criada inicialmente como remédio caseiro, tornou-se o coquetel nacional do Brasil e conquistou o mundo.'
  },
  {
    id: 'caipiroska',
    name: 'Caipiroska',
    ingredients: 'Vodka, limão e açúcar',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop',
    description: 'Uma variação moderna da caipirinha, substituindo a cachaça pela vodka.',
    origin: 'Popularizada nos anos 90, oferece um sabor mais suave e neutro, mantendo a essência refrescante.'
  },
  {
    id: 'mojito',
    name: 'Mojito',
    ingredients: 'Rum, hortelã, limão e água com gás',
    image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400&h=300&fit=crop',
    description: 'Clássico cubano refrescante, perfeito para dias quentes.',
    origin: 'Originário de Havana, Cuba, no século XVI. Era consumido por piratas e marinheiros como remédio.'
  },
  {
    id: 'cuba-libre',
    name: 'Cuba Libre',
    ingredients: 'Rum, coca e limão',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop',
    description: 'Drink simples e saboroso que representa a liberdade cubana.',
    origin: 'Criado em 1900 em Havana, simbolizando a independência de Cuba. Nome significa "Cuba Livre".'
  },
  {
    id: 'tequila-collins',
    name: 'Tequila Collins',
    ingredients: 'Tequila, limão, açúcar e soda',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=300&fit=crop',
    description: 'Variação mexicana do clássico Tom Collins, com tequila no lugar do gin.',
    origin: 'Adaptação moderna que combina a tradição mexicana da tequila com a refrescância dos collins.'
  },
  {
    id: 'verao-43',
    name: 'Verão 43',
    ingredients: 'Licor 43, Sprite e limão',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=300&fit=crop',
    description: 'Drink doce e refrescante, perfeito para o verão brasileiro.',
    origin: 'Criação brasileira usando o licor espanhol Licor 43, conhecido por suas 43 ervas e especiarias.'
  },
  {
    id: 'whisky',
    name: 'Whisky',
    ingredients: 'Dose tradicional',
    image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&h=300&fit=crop',
    description: 'A bebida dos conhecedores, apreciada pura ou com gelo.',
    origin: 'Destilado milenar originário da Escócia e Irlanda, símbolo de sofisticação e tradição.'
  }
]

export default function DrinksAndDoses() {
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const openModal = (drink: Drink) => {
    setIsAnimating(true)
    setSelectedDrink(drink)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const closeModal = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setSelectedDrink(null)
      setIsAnimating(false)
    }, 200)
  }

  return (
    <div className="min-h-screen bg-[#0B1A2D] text-[#F2F2F2] font-inter">
      {/* Header */}
      <header className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#F2F2F2] mb-4">
          Drinks & Doses
        </h1>
        <p className="text-lg md:text-xl text-[#B8B8B8] max-w-2xl mx-auto">
          Experiências únicas criadas por Arthur Couto
        </p>
      </header>

      {/* Cards Grid */}
      <section className="px-4 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {drinks.map((drink) => (
            <div
              key={drink.id}
              className="bg-[#1C1C1C] rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 group cursor-pointer border border-[#2A2A2A]"
              onClick={() => openModal(drink)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#F2F2F2] mb-2">
                  {drink.name}
                </h3>
                <p className="text-[#B8B8B8] text-sm mb-4">
                  {drink.ingredients}
                </p>
                <div className="w-full bg-[#0B1A2D] text-[#F2F2F2] py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:bg-[#2A2A2A] text-center group-hover:bg-[#2A2A2A]">
                  Descobrir receita
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#1C1C1C] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F2F2F2] mb-8">
            Sobre Arthur Couto
          </h2>
          <div className="text-lg text-[#B8B8B8] leading-relaxed max-w-3xl mx-auto space-y-4">
            <p>
              Natural de Capanema, Arthur Couto iniciou sua carreira no DiRocha Burguer & Beer, 
              onde desenvolveu suas habilidades na arte da mixologia. Após essa experiência, 
              expandiu sua atuação para eventos privados, especializando-se em aniversários, 
              festas e celebrações exclusivas.
            </p>
            <p>
              Cada receita aqui representa um toque de <strong className="text-[#F2F2F2]">exclusividade e equilíbrio</strong>, 
              resultado de anos de experiência e dedicação à arte de criar drinks únicos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F2F2F2] mb-8">
            Contato
          </h2>
          <div className="bg-[#1C1C1C] rounded-2xl p-8 inline-block border border-[#2A2A2A]">
            <p className="text-[#B8B8B8] text-lg mb-4">
              📱 Fale com Arthur Couto no WhatsApp:
            </p>
            <a
              href="https://wa.me/5591993805497"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0B1A2D] text-[#F2F2F2] px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[#2A2A2A] text-lg"
            >
              <MessageCircle size={24} />
              +55 91 99380-5497
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#2A2A2A]">
        <div className="text-center">
          <p className="text-[#B8B8B8] opacity-80">
            © 2025 Drinks & Doses — Arthur Couto
          </p>
        </div>
      </footer>

      {/* Enhanced Modal */}
      {selectedDrink && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className={`bg-[#1C1C1C] rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-[#2A2A2A] transition-all duration-300 ${
            isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
          }`}>
            <div className="relative">
              <img
                src={selectedDrink.image}
                alt={selectedDrink.name}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-[#1C1C1C]/90 backdrop-blur-sm rounded-full p-2 hover:bg-[#2A2A2A] transition-all duration-300"
              >
                <X size={20} className="text-[#F2F2F2]" />
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-[#F2F2F2] mb-2">
                  {selectedDrink.name}
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-semibold text-[#F2F2F2] mb-3 text-lg flex items-center gap-2">
                  🍸 Ingredientes Premium
                </h4>
                <p className="text-[#B8B8B8] bg-[#0B1A2D] p-3 rounded-lg">{selectedDrink.ingredients}</p>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-[#F2F2F2] mb-3 text-lg flex items-center gap-2">
                  ✨ História & Curiosidades
                </h4>
                <p className="text-[#B8B8B8] mb-3 leading-relaxed">{selectedDrink.description}</p>
                <p className="text-[#B8B8B8] leading-relaxed italic">{selectedDrink.origin}</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={closeModal}
                  className="flex-1 bg-[#2A2A2A] text-[#F2F2F2] py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:bg-[#3A3A3A]"
                >
                  Voltar ao cardápio
                </button>
                <a
                  href="https://wa.me/5591993805497"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#0B1A2D] text-[#F2F2F2] py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:bg-[#1A2A3D] text-center"
                >
                  Encomendar
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}