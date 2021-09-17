import React, { Component } from 'react';
import './nav.css';
import Lista from './lista.js';

export default class Nav extends Component{

  constructor(){
    super();
    this.state = {
      palabra: '',
      pal: false,
      aux: '',
      data: []
    }
    this.agregar = this.agregar.bind(this);
    this.cambio = this.cambio.bind(this);
  }

  cambio(e){
    const palabra = e.target.value;
    var inversa = '';
    var palindroma = false;

    for(var i = palabra.length; i >= 0; i--){
      inversa += palabra[i];
    }

    inversa = inversa.substring(9, inversa.length);

    if(palabra === inversa){
      palindroma = true;
    }

    this.setState({
      palabra,
      aux : inversa,
      pal: palindroma
    });
  }

  agregar(e){
    fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({
          palabra: '',
          aux: '',
          pal: false
        });
        this.obtener();
      })
      .catch(err => console.error(err))

    e.preventDefault();
  }

  componentDidMount(){
    this.obtener();
  }

  obtener(){
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => {
        this.setState({tasks: data});
        // console.log(this.state.tasks);
      })
      .catch(err => console.error(err))
  }

  render(){
      return (
        <div>
          <div className='container-fluid bg-danger'>
            <div className='row justify-content-center'>
              <div className='col text-center col-8 p-3'>
                <input onChange={this.cambio} className='input bg-danger'  type='text' placeholder='Insert text' value={this.state.palabra}>
                </input>
              </div>
              <form className='col' onSubmit={this.agregar}>
                <div className='text-center text-sm-start p-3'>
                  <button type="submit" className='boton btn btn-primary'>
                      Send
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* <div className='container-md bg-secondary mt-5 rounded'>
            <div className="row">
                <div className='col p-3'>
                    <table className='row'>
                        <thead>
                            <tr className='row col-12'>
                                <th className='col-6 text-center'>Palabra</th>
                                <th className='col-6 text-center'>Palindroma</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                              this.state.tasks && this.state.tasks.map(task => {
                                return(
                                  <tr className='row col-12'>
                                      <td className='col-6 text-center'>{task.palabra}</td>
                                      <td className='col-6 text-center'>{task.pal}</td>
                                  </tr>
                                );
                              })                                
                            }
                        </tbody>
                    </table>
                </div>
            </div> */}
          {/* </div> */}

          <Lista tasks={this.state.tasks}/>
        </div>
      );
  }
}

