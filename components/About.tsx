const About = () => {
  return (
    <div id="about" className="bg-[#0C0C0C] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-8 md:px-16 text-center">
        {/* Title */}
        <h2 className="uppercase text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] mb-10 md:mb-14">
          What is E-Cell?
        </h2>

        {/* Description */}
        <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose font-light">
          &ldquo;E-Cell VNIT is an entrepreneurship cell based at Visvesvaraya National Institute of Technology that mentors and guides new and existing startups. It aims to foster a community of entrepreneurs, with programs and events that provide deserving individuals with opportunities to develop entrepreneurial skills and succeed. We stand as pillars of support for budding entrepreneurs, providing them with personalized guidance from experienced mentors, crucial funding opportunities, and a robust network that can change the course of their journey forever!&rdquo;
        </p>
      </div>
    </div>
  )
}

export default About;
