function About ({text}){  //если только один пропс, то его можно так передать

  return (
    <div className="wrap" style={{textAlign:"center", padding: "0" }}>
      <h2>{text.title}</h2>
      <p>{text.description}</p>
    </div>
  )
}

export default About;