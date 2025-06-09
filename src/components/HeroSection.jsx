
import { ArrowBigDown, ArrowDown } from "lucide-react"
export const HeroSection=()=>{
    return  <section id="hero"
     className="relative min-h-screen flex flex-col items-center justify-center px-4" >
        <div className="container max-w-4xl mx-auto text-center z-10">

<div className="space-y-6">
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">

        <span className="opacity-0 animate-fade-in-delay-0">Hi, I'm</span>
        <span className="text-primary opacity-0 animate-fade-in-delay-1 "> 
            {" "}Avriti</span>
        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 ">{" "}Sharma</span>
    </h1>
    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
a full-stack developer who loves building clean, functional web apps and sharpening problem-solving skills through DSA. 
When I'm not coding, you'll find me lost in a book, exploring new places, or learning a new language.
I believe in growing a  little every day,in tech and in life. (:
    </p>
    <div className="opacity-0 animate-fade-in delay-4"><a href="#projects" className="cosmic-button"> View My Work</a></div>
</div>
 </div>  <div className="absolute bottom-8 left-1/2 tranform-translate-x-1/2 flex flex-col items-center animate-bounce ">
 <span className="text-sm text-mmutes-foreground">
    Scroll <ArrowDown className="h-5 w-5 text-primary"/> </span></div>
    </section>
}