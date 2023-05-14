import React from "react";

export default function About(props) {
  console.log(props);
  // console.log(props.dataBuah[3]);
  return (
    <div className="container">
      <h1>
        About: {props.nilaiNama} sangat suka buah {props.dataBuah[3]}
      </h1>
      <p style={{ textAlign: "justify" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro tenetur
        eveniet aliquid voluptate, culpa ex veritatis aut, esse voluptatem quos
        quidem repellat assumenda eaque maiores minus explicabo saepe expedita
        unde? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur velit minus voluptatibus blanditiis, possimus eos quam
        recusandae aperiam magni nesciunt dolor eveniet laborum perferendis iure
        eum! Mollitia neque iure accusamus?
      </p>
    </div>
  );
}
