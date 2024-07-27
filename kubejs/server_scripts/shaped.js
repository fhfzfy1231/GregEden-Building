ServerEvents.recipes(event => {
    event.shaped(
        Item.of('gtceu:ulv_16a_energy_converter', 1), 
        [
          'AAA',
          'ABA', 
          'ACA'
        ],
        {
          A: 'gtceu:gold_hex_wire',
          B: 'mekanism:ultimate_universal_cable',  
          C: 'mekanism:ultimate_energy_cube'
        }
    )
    event.shaped(
        Item.of('gtceu:lv_16a_energy_converter', 1), 
        [
          'AAA',
          'ABA', 
          'ACA'
        ],
        {
          A: 'gtceu:gold_hex_wire',
          B: 'gtceu:ulv_16a_energy_converter',  
          C: 'mekanism:ultimate_energy_cube'
        }
    )
    event.shaped(
        Item.of('gtceu:mv_16a_energy_converter', 1), 
        [
          'AAA',
          'ABA', 
          'ACA'
        ],
        {
          A: 'gtceu:gold_hex_wire',
          B: 'gtceu:lv_16a_energy_converter',  
          C: 'mekanism:ultimate_energy_cube'
        }
    )
    event.shaped(
        Item.of('gtceu:hv_16a_energy_converter', 1), 
        [
          'AAA',
          'ABA', 
          'ACA'
        ],
        {
          A: 'gtceu:gold_hex_wire',
          B: 'gtceu:mv_16a_energy_converter',  
          C: 'mekanism:ultimate_energy_cube'
        }
    )
    event.shaped(
        Item.of('gtceu:ev_16a_energy_converter', 1), 
        [
          'AAA',
          'ABA', 
          'ACA'
        ],
        {
          A: 'gtceu:gold_hex_wire',
          B: 'gtceu:hv_16a_energy_converter',  
          C: 'mekanism:ultimate_energy_cube'
        }
    )
    event.shaped(
        Item.of('gtceu:iv_16a_energy_converter', 1), 
        [
          'AAA',
          'ABA', 
          'ACA'
        ],
        {
          A: 'gtceu:gold_hex_wire',
          B: 'gtceu:ev_16a_energy_converter',  
          C: 'mekanism:ultimate_energy_cube'
        }
    )
    event.shaped(
        Item.of('gtceu:luv_16a_energy_converter', 1), 
        [
          'AAA',
          'ABA', 
          'ACA'
        ],
        {
          A: 'gtceu:gold_hex_wire',
          B: 'gtceu:iv_16a_energy_converter',  
          C: 'mekanism:ultimate_energy_cube'
        }
    )
    event.shaped(
        Item.of('gtceu:zpm_16a_energy_converter', 1), 
        [
          'AAA',
          'ABA', 
          'ACA'
        ],
        {
          A: 'gtceu:gold_hex_wire',
          B: 'gtceu:luv_16a_energy_converter',  
          C: 'mekanism:ultimate_energy_cube'
        }
    )
    event.shaped(
        Item.of('gtceu:uv_16a_energy_converter', 1), 
        [
          'AAA',
          'ABA', 
          'ACA'
        ],
        {
          A: 'gtceu:gold_hex_wire',
          B: 'gtceu:zpm_16a_energy_converter',  
          C: 'mekanism:ultimate_energy_cube'
        }
    )
    event.shaped(
        Item.of('gtceu:uhv_16a_energy_converter', 1), 
        [
          'AAA',
          'ABA', 
          'ACA'
        ],
        {
          A: 'gtceu:gold_hex_wire',
          B: 'gtceu:uv_16a_energy_converter',  
          C: 'mekanism:ultimate_energy_cube'
        }
    )
  })

