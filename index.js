
const allProjects = [
    {name: "Random Quote Generator", link: "https://trampakool.github.io/random-quote-generator/", image: "./random-quote-generator.png"},
    {name: "Drum Machine", link: "https://trampakool.github.io/drum-machine/", image: "./drum-machine.png"},
    {name: "Calculator", link: "https://trampakool.github.io/calculator/", image: "./calculator.png"},
    {name: "Markdown Previewer", link: "https://trampakool.github.io/markdown-previewer/", image: "./markdown-previewer.png"},
    {name: "Pokemon Search App", link: "https://trampakool.github.io/pokemon-search-app/", image: "./pokemon-search-app.png"},
    {name: "Decimal to Roman Numeral Converter", link: "https://trampakool.github.io/dec-to-roman/", image: "./dec-to-roman.png"},
];

const Projects = () => {

    return (
        <>
            {
                allProjects.map((el, index) => (
                    <a href={el.link} target="_blank" className="project-tile" key={`p-${index}`} >
                        <img src={el.image} alt="A project" />
                        <p className="project-title">
                            <span className="text-deco">&lt;</span>
                            {el.name}
                            <span className="text-deco">/&gt;</span>
                        </p>
                    </a>
                ))
            }    
        </>
    );
};

ReactDOM.render(<Projects />, document.getElementById("projects-grid"));