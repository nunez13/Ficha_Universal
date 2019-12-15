import React, {Component} from 'react'
import { MDBCol,MDBCard, MDBCardBody,MDBCardTitle,MDBInput} from "mdbreact"
import { Calendar } from 'primereact/calendar';
import { Chips } from 'primereact/chips'
import { Dropdown } from 'primereact/dropdown';


export default class FormDetallesFicha extends Component {
  

  state = {
      address: "",
      birthData: "",
      gender: "",
      deathData: "",
      bloodType: "",
      heigth: "",
      weigth: "",
      legalRepresentative: "",
      occupation: "",
      allergies: [ ],
      maritalStatus: "",
      city: "",
      region: "",
      optionSelectGender: [
        { label: 'Masculino', value: 'Masculino' },
        { label: 'Femenino',  value: 'Femenino'  }
      ],
      optionSelectBloodType: [
        { label: 'A+', value: 'A+'   },
        { label: 'A-', value: 'A-'   },
        { label: 'B+', value: 'B-'   },
        { label: 'AB+', value: 'AB+' },
        { label: 'AB-', value: 'AB-' },
        { label: 'O+', value: 'O+'   },
        { label: 'O-', value: 'O-'   }
      ],
      optionsRegions: [
        { label: 'Arica y Parinacota', value: 'Arica y Parinacota'},
        { label:'Tarapacá', value: 'Tarapacá' },
        { label: 'Antofagasta', value: 'Antofagasta'},
        { label: 'Atacama', value: 'Atacama' },
        { label: 'Coquimbo', value: 'Coquimbo'},
        { label: 'Valparaíso', value: 'Valparaíso'},
        { label: 'Región del Libertador Gral. Bernardo O’Higgins', value: 'Región del Libertador Gral. Bernardo O’Higgins' },
        { label: 'Región del Maule', value: 'Región del Maule' },
        { label: 'Región del Biobío', value: 'Región del Biobío' },
        { label: 'Región de la Araucanía', value: 'Región de la Araucanía' },
        { label: 'Región de Los Ríos', value: 'Región de Los Ríos'},
        { label: 'Región de Los Lagos', value: 'Región de Los Lagos'},
        { label: 'Región Aisén del Gral. Carlos Ibáñez del Campo', value: 'Región Aisén del Gral. Carlos Ibáñez del Campo'},
        { label: 'Región de Magallanes y de la AntárVca Chilena', value: 'Región de Magallanes y de la AntárVca Chilena'},
        { label: 'Región Metropolitana de Santiago', value: 'Región Metropolitana de Santiago'}

      ],
      CitiesAndRegions: {

        "regiones": [{
            "NombreRegion": "Arica y Parinacota",
            "comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
        },
          {
            "NombreRegion": "Tarapacá",
            "comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
        },
          {
            "NombreRegion": "Antofagasta",
            "comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
        },
          {
            "NombreRegion": "Atacama",
            "comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
        },
          {
            "NombreRegion": "Coquimbo",
            "comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
        },
          {
            "NombreRegion": "Valparaíso",
            "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
        },
          {
            "NombreRegion": "Región del Libertador Gral. Bernardo O’Higgins",
            "comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
        },
          {
            "NombreRegion": "Región del Maule",
            "comunas": ["Talca", "ConsVtución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
        },
          {
            "NombreRegion": "Región del Biobío",
            "comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío", "Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"]
        },
          {
            "NombreRegion": "Región de la Araucanía",
            "comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria", ]
        },
          {
            "NombreRegion": "Región de Los Ríos",
            "comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
        },
          {
            "NombreRegion": "Región de Los Lagos",
            "comunas": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "FruVllar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
        },
          {
            "NombreRegion": "Región Aisén del Gral. Carlos Ibáñez del Campo",
            "comunas": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
        },
          {
            "NombreRegion": "Región de Magallanes y de la AntárVca Chilena",
            "comunas": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "AntárVca", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
        },
          {
            "NombreRegion": "Región Metropolitana de Santiago",
            "comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "TilVl", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
        }]
      }
  
  }
  render(){
    return(

      <MDBCol md="4">
        <MDBCard className="cardd">
          <MDBCardBody className = "scrollbar scrollbar-primary">
            <MDBCardTitle>Detalles Ficha Usuario</MDBCardTitle>
            <MDBInput label={'address'}/>
            <Calendar value={this.state.birthData} 
                      onChange={(e) => this.setState({birthData: e.value})}>
            </Calendar>

            <Dropdown value={this.state.gender} 
                      options={this.state.optionSelectGender} 
                      onChange={(e) => {this.setState({ gender: e.value })}} 
                      placeholder="Select a Gender"
            />

            <Calendar value={this.state.deathData} 
                      onChange={(e) => this.setState({deathData: e.value})}>
            </Calendar>

            <Dropdown value={this.state.bloodType} 
                      options={ this.state.optionSelectBloodType } 
                      onChange={(e) => {this.setState({city: e.value})}} 
                      placeholder="Select a Blood Type"
            />

            <MDBInput label="Heigth" onChange={(e) => this.setState({heigth: e.value})} />
            <MDBInput label="Weigth" onChange={(e) => this.setState({weigth: e.value})} />
            <MDBInput label="Legal Representative" 
                      onChange={(e) => this.setState({legalRepresentative: e.value})}
            />
            <MDBInput label="Ocupation" onChange={(e) => this.setState({occupation: e.value})} />
            
            <Chips value={this.state.allergies} 
                   onChange={(e) => this.setState({allergies: e.value})}>
            </Chips>
            <MDBInput label="Marital Status" 
                      onChange={(e) => this.setState({maritalStatus: e.value})}
            />


            <Dropdown value={this.state.region} 
                      options={ this.state.optionsRegions } 
                      onChange={(e) => {this.setState({city: e.value})}} 
                      placeholder="Select a Region"
            />







          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
  }
}