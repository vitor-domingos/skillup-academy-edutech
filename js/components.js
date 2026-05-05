// components.js (Lembre-se do type="text/babel" na tag script do HTML)
const testimonialsData = [
    {
        id: 1,
        quote: "A implementação das plataformas interativas transformou completamente o engajamento dos meus alunos. Eles estão mais curiosos e participativos!",
        author: "Profª. Ana Silva, Escola Aprender Mais"
    },
    {
        id: 2,
        quote: "Com as ferramentas de aprendizado personalizado, consigo atender melhor às necessidades individuais. O progresso dos alunos com mais dificuldade é notável.",
        author: "Educador Carlos Mendes, Colégio Inovar"
    },
    {
        id: 3,
        quote: "O suporte técnico foi essencial para nos sentirmos seguros ao adotar as novas tecnologias. A equipe é rápida e muito prestativa.",
        author: "Diretora Beatriz Costa, Instituto Educar Tech"
    }
    // Adicione mais testemunhos aqui se tiver
];

// Componente para um único Testemunho
function Testimonial(props) {
    return (
        <div className="testimonial-card">
            <blockquote>"{props.quote}"</blockquote>
            <cite>- {props.author}</cite>
        </div>
    );
}

// Componente para a Lista de Testemunhos
function TestimonialsList() {
    return (
        <div className="testimonials-container">
            {testimonialsData.map(testimonial => (
                <Testimonial
                    key={testimonial.id}
                    quote={testimonial.quote}
                    author={testimonial.author}
                />
            ))}
        </div>
    );
}

// Ponto de entrada para renderizar o componente React na página
const domContainer = document.querySelector('#testimonials-root');
const root = ReactDOM.createRoot(domContainer);
root.render(<TestimonialsList />);