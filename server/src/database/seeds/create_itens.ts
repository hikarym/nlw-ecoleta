import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('items').insert([
        { title: 'Lâmpadas', image: 'lampadas.svg'},
        { title: 'Pilhas e baterias', image: 'baterias.svg'},
        { title: 'Papéis e Papelão', image: 'papeis-papelado.svg'},
        { title: 'Residuos Eletroônicos', image: 'eletronicos.svg'},
        { title: 'Residuos Orgânicos', image: 'organicos.svg'},
        { title: 'Ôleo de Cozinha', image: 'oleo.svg'},    
    ]);
}