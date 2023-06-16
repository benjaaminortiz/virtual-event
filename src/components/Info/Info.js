import React from 'react'
import './Info.css'
import ProfilePic from './img-astudillo.png'
import Specialist from './Specialist'

var specialists = [{
  name: 'Jose Perez',
  role: 'Presidente',
  img: ProfilePic
},
{
  name: 'Jose Perez',
  role: 'Customer Service Senior Manager',
  img: ProfilePic
},
{
  name: 'Jose Perez',
  role: 'Senior Customer Success Consultant',
  img: ProfilePic
},
{
  name: 'Jose Perez',
  role: 'Gerente de Consultoría de Soluciones',
  img: ProfilePic
},
]

const Info = () => {
  return (
    <div className='i-main'>
      <p>Te invitan este webinar, donde trataremos la temática de cómo humanizar la experiencia del cliente de Banca y Seguros en el nuevo entorno digital.</p>
      <p>   Además podremos conocer las estrategias que aplicó LOREM para generar una experiencia memorable para sus clientes, mientras se convertía en el gran Unicornio de LATAM.</p>
      <p>Escucha de primera mano la voz de nuestros especialistas:</p>

      <div>
        {specialists.map((specialist)=>{
          return <Specialist img={specialist.img} name={specialist.name} role={specialist.role} />
        })}
      </div>

     <p> Participa e inspírate para innovar y mejorar la interacción entre clientes y marcas con historias de éxito de empresas del ámbito financiero en América Latina.
</p>
      
      <p>¡Te esperamos!</p>
    </div>
  )
}

export default Info