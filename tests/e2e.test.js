import { Selector } from 'testcafe';

fixture `Test du formulaire de nom`
    .page `http://localhost:8080/index.html`; // Assurez-vous que l'URL est correcte

const nomInput = Selector('#nameInput');
const enregistrerButton = Selector('#saveButton');

test('Saisie du nom et vérification de l\'affichage en majuscules', async t => {
    const nomASaisir = 'Rose'; // Vous pouvez utiliser un autre nom pour le test

    await t
        .typeText(nomInput, nomASaisir)
        .click(enregistrerButton);

    await t.expect(Selector('#resultName').innerText).eql(nomASaisir.toUpperCase(), 'Le nom doit être affiché en majuscules.');
});