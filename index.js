const { useState, useEffect } = React;

const allProjects = [
    {name: "Random Quote Generator", link: "https://trampakool.github.io/random-quote-generator/", image: ""},
    {name: "Drum Machine", link: "https://trampakool.github.io/drum-machine/", image: ""},
];

const API_KEY = "AIzaSyC-q-tKcK4pi-Nw5PwjxaGQmTB7wX7hDfc";

const Projects = () => {
    const [screenshots, setScreenshots] = useState({});

    const getScreenShot = async (pageLink) => {
        try {
            const response = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(pageLink)}&key=${API_KEY}&strategy=desktop
            `);
            const data = await response.json();

            const screenshot = data.lighthouseResult.audits['final-screenshot'].details.data;
            return screenshot;
        } catch (error) {
            console.error("Error while fetching data!", error);
        }
    }

    useEffect(() => {
        const fetchScreenshots = async () => {
            const allScreenshots = {};
            for (const project of allProjects) {
                allScreenshots[project.link] = await getScreenShot(project.link);
            }
            setScreenshots(allScreenshots);
        }

        fetchScreenshots();
    }, []);

    return (
        <>
            {
                allProjects.map((el, index) => (
                    <a href={el.link} target="_blank" className="project-tile" key={`p-${index}`} >
                        <img src={el.image} alt="A project" />
                        <p className="project-title">
                            <span className="text-deco">&lt;</span>
                            {el.name}
                            <span className="text-deco">&gt;</span>
                        </p>
                    </a>
                ))
            }    
        </>
    );
};
ReactDOM.render(<Projects />, document.getElementById("projects-grid"));