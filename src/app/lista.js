import React, { Component } from 'react';

export default class Lista extends Component{
  render(){
      return (
        <div className='container-md bg-secondary mt-5 rounded'>
            <div className="row">
                <div className='col p-3'>
                    <table className='row'>
                        <thead>
                            <tr className='row col-12'>
                                <th className='col-4 text-center'>Palabra</th>
                                <th className='col-4 text-center'>Al revés</th>
                                <th className='col-4 text-center'>Palíndromo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.tasks && this.props.tasks.map((task) => {
                                    return(
                                        <tr className='row col-12'>
                                            <td className='col-4 text-center'>{task.palabra}</td>
                                            <td className='col-4 text-center'>{task.aux}</td>
                                            <td className='col-4 text-center'>{String(task.pal)}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
      </div>
      );
  }
}