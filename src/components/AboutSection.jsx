import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
            A Bit About Me 
            </h3>

            <p className="text-muted-foreground">
              I'm a newbie with a strong foundation in full-stack web development using the MERN stack. I’ve built responsive, real-world projects integrating MongoDB, Express, React, and Node.js, and I’m currently focused on deepening my React skills while actively practicing Data Structures and Algorithms to sharpen my problem solving abilities. I'm also exploring cloud technologies and DevOps tools to round out my developer toolkit.
            </p>

            <p className="text-muted-foreground">
             Beyond coding, I'm someone who finds joy in constant learning and exploration. I’m an avid reader, especially drawn to gripping thrillers and I love traveling to new places. I also have a passion for languages.Right now, I’m learning Japanese and enjoying every bit of the challenge. Whether it's debugging code or deciphering Kanji, I'm always eager to push my boundaries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://www.dropbox.com/scl/fi/3hqv6kkqei4f0lqug991x/AvritiResume.pdf?rlkey=yf96pyeomyk0kn9qxzp1jav87&st=txepugvb&dl=0"  target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Developing full-stack applications using MERN to bring ideas to life.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI Theming</h4>
                  <p className="text-muted-foreground">
                     Utilized Material UI, Tailwind CSS, Bulma, and Bootstrap to create a visually appealing and consistent user interface.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Interests</h4>
                  <p className="text-muted-foreground">
                        A combination of literary exploration and real-world travel fuels a passion for continuous learning, broadened perspectives, and an appreciation for global diversity. I'm always happy to discuss books and travel in my free time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};