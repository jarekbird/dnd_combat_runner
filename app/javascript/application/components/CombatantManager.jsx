import React from 'react'

const CombatantManager = (props) => {
  return (
    <>
    <table className="table table-hover table-bordered">
      <thead className="table-dark">
        <tr>
          <th scope="col">Combatant Name</th>
          <th scope="col">Current HP</th>
          <th scope="col">Temporary HP</th>
          <th scope="col">Initiative</th>
        </tr>
      </thead>
      <tbody>
      {props.combatants_in_combat.sort((cic1,cic2)=>(cic2.working_initiative-cic1.working_initiative)).map((combatant_in_combat, index) => (
          <tr key={index}>
            <td>{combatant_in_combat.combatant.name}</td>
            <td>{combatant_in_combat.current_hp}</td>
            <td>{combatant_in_combat.temporary_hp}</td>
            <td>{combatant_in_combat.working_initiative}</td>
          </tr>
        ))}
      </tbody>
    </table>     
    </>
  );
}
 
export default CombatantManager;